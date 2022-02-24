import "./styles.css";
import React, { useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SearchPage } from "./Components/SearchPage";
import { SearchTopicNavBar } from "./Components/SearchTopicNavBar";
import { SearchCongressMembers } from "./Components/SearchCongressMembers";
import { SearchBills } from "./Components/SearchBills";
import { CongressMembersResults } from "./Components/CongressMembersResults";
import { BillsResults } from "./Components/BillsResults";
import { PageNav } from "./Components/PageNav";
import { DetailsPage } from "./Components/DetailsPage";
import { CongressMembersDetails } from "./Components/CongressMembersDetails";
import { BillsDetails } from "./Components/BillsDetails";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/search/:searchTopic"
          render={(props) => {
            const searchTopic = props.match.params.searchTopic;
            var SearchForm, SearchResultsContainer;
            switch (searchTopic) {
              case "congressmembers":
                SearchForm = SearchCongressMembers;
                SearchResultsContainer = CongressMembersResults;
                break;
              case "bills":
                SearchForm = SearchBills;
                SearchResultsContainer = BillsResults;
                break;
              default:
                throw Error("invalid search topic");
            }
            return (
              <SearchPage
                searchTopic={searchTopic}
                SearchTopicNavBar={SearchTopicNavBar}
                SearchForm={SearchForm}
                SearchResultsContainer={SearchResultsContainer}
                PageNav={PageNav}
              ></SearchPage>
            );
          }}
        />
        <Route
          path="/details/:searchTopic"
          render={(props) => {
            const searchTopic = props.match.params.searchTopic;
            var DetailsContainer;
            switch (searchTopic) {
              case "congressmembers":
                DetailsContainer = CongressMembersDetails;
                break;
              case "bills":
                DetailsContainer = BillsDetails;
                break;
              default:
                throw Error("invalid search topic");
            }
            return (
              <DetailsPage
                searchTopic={searchTopic}
                DetailsContainer={DetailsContainer}
              />
            );
          }}
        />
        <Redirect exact from="/" to="/search/congressmembers" />
      </Switch>
    </div>
  );
}
