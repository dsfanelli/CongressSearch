import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { APIFetcher } from "./APIFetcher";
import { LiveSearchFormContainer } from "./LiveSearchFormContainer";
import { apiURLBuilder } from "../searchUtils/URLBuilderForSearchAPI";
/*
  This is the main page that displays all the components
  involved in a search, as well as the search results.
  It injects callbacks into the components passed in as
  its props as they're designed to be reusable and 
  need logic provided to them. The page is almost entirely
  driven by the query string, which provides data to be
  displayed in the search form, the page number
  to be displayed in the page navigation component, and
  to be used to query the backend for search results.
*/
const SearchPage = (props) => {
  const {
    searchTopic,
    SearchTopicNavBar,
    SearchForm,
    SearchResultsContainer,
    PageNav
  } = props;
  const history = useHistory();
  //key value pairs derived from query string
  const qsObject = new URLSearchParams(history.location.search);
  /*
    qsCacheByTopic saves the query string to be reused 
    in case the user changes the topic, and wants to revert
    to a previous topic. This avoids having to re enter data
    in the form when the use revisits a topic.
  */
  const qsCacheByTopic = useRef({}).current;
  /*
    updateSearchPage reloads the page with either
    a new search topic or a new search query on 
    the current topic using the history hook. Uses
    replace as to not fatten the history stack with
    lots of older search queries, especially when a 
    live search is used
  */
  const updateSearchPage = (searchTopic, newQueryString) => {
    history.replace({
      pathname: searchTopic,
      search: newQueryString
    });
  };
  /*
    For the topic nav, this is the logic that fires 
    after the user chooses a different topic. It first
    saves the query string before calling updateSearchPage
    to reload the page with the new topic
  */
  const updateSearchTopic = (selectedTopic) => {
    //save the current query string to be reused when revisiting topic
    qsCacheByTopic[searchTopic] = qsObject.toString();
    updateSearchPage(selectedTopic, qsCacheByTopic[selectedTopic] || "");
  };
  /*
    For LiveSearchFormContainer, but doesn't need live
    search functionality. It is called by the search
    form container to submit the form data to kickstart
    a backend query for search results
  */
  const submitSearch = (fieldParams) => {
    const newURLParams = new URLSearchParams(fieldParams);
    updateSearchPage(searchTopic, newURLParams.toString());
  };
  /*
    Here we build the url to communicate to the backend using
    a builder to hide the URL structure. It will pass to the
    APIFetcher, which reuses fetching logic and supplies data
    to the container component passed to it
  */
  const pageNum = qsObject.get("pageNum") || 0;
  /*
    delete the pageNum (or the number of the resuts page displayed)
    from our queryString data so the backend doesn't treat it as
    a data field
  */
  qsObject.delete("pageNum");
  const fieldParams = qsObject.toString();
  const urlForSearchAPI = apiURLBuilder.buildAPIURL({
    searchTopic,
    fieldParams,
    skip: pageNum ? (pageNum - 1) * 20 : 0,
    limit: 20
  });
  //For PageNav
  const changePageNum = (pageNum) => {
    qsObject.set("pageNum", pageNum);
    updateSearchPage(searchTopic, qsObject.toString());
  };
  return (
    <div className="searchPage">
      <SearchTopicNavBar
        searchTopic={searchTopic}
        updateSearchTopic={updateSearchTopic}
      />
      <LiveSearchFormContainer
        formFields={qsObject.entries()}
        SearchForm={SearchForm}
        submitSearch={submitSearch}
      />
      <APIFetcher
        URL={urlForSearchAPI}
        ResultsContainer={SearchResultsContainer}
      />
      <PageNav pageNum={pageNum || 1} changePageNum={changePageNum} />
    </div>
  );
};
export { SearchPage };
