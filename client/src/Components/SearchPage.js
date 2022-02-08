import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { APIFetcher } from "./APIFetcher";
import { LiveSearchFormContainer } from "./LiveSearchFormContainer";
import { apiURLBuilder } from "../searchUtils/URLBuilderForSearchAPI";

const SearchPage = (props) => {
  const { searchTopic, SearchTopicNavBar, SearchForm, PageNav } = props;
  const SearchResultsContainer = props.children;
  const history = useHistory();
  const qsObject = new URLSearchParams(history.location.search);
  const qsCacheByTopic = useRef({}).current;

  const updateSearchPage = (searchTopic, newQueryString) => {
    history.replace({
      pathname: searchTopic,
      search: newQueryString
    });
  };

  const updateSearchTopic = (selectedTopic) => {
    qsCacheByTopic[searchTopic] = qsObject.toString();
    updateSearchPage(selectedTopic, qsCacheByTopic[selectedTopic] || "");
  };
  //For LiveSearchFormContainer
  const submitSearch = (fieldParams) => {
    const newURLParams = new URLSearchParams(fieldParams);
    updateSearchPage(searchTopic, newURLParams.toString());
  };
  //For APIFetcher
  const pageNum = qsObject.get("pageNum") || 0;
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
