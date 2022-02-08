import React from "react";
import { CongressMembersResults } from "./CongressMemberResults";
import { BillsResults } from "./BillsResults";
const SearchResultsContainer = (props) => {
  const { searchTopic, searchResults } = props;
  return (
    <div className="searchResultsContainer">
      {(() => {
        if (searchResults !== null) {
          switch (searchTopic) {
            case "congressmembers":
              return <CongressMembersResults searchResults={searchResults} />;
            case "bills":
              return <BillsResults searchResults={searchResults} />;
            default:
              return "Invalid search topic...";
          }
        } else {
          return "No results...";
        }
      })()}
    </div>
  );
};
export { SearchResultsContainer };
