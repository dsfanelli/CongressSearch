import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/*
  Search results returned from a search against
  bills
*/

const BillsResults = (props) => {
  const { searchResults } = props;
  const history = useHistory();
  const [expandedTitleRows, setExpandedTitleRows] = useState({});
  /*
    Since bill titles are too long to display in search result
    cards, they are hidden behind their id's and display in 
    a separate row if the user is interested in reading them
  */
  const changeExpandState = (billNum) => {
    if (!expandedTitleRows[billNum]) {
      setExpandedTitleRows({ ...expandedTitleRows, [billNum]: billNum });
    } else {
      delete expandedTitleRows[billNum];
      setExpandedTitleRows({ ...expandedTitleRows });
    }
  };
  return (
    <div className="searchResults">
      {searchResults.map((bill, index) => {
        const {
          bill_id,
          title,
          number,
          sponsor_name,
          primary_subject,
          ...rest
        } = bill;
        const titleExpanded = expandedTitleRows.hasOwnProperty(index)
          ? true
          : false;
        const rowEven = index % 2 === 0;
        return (
          <div
            className={"searchResultRow " + (rowEven ? "evenRow" : "oddRow")}
            key={bill_id}
          >
            <div className="searchResultRowCells">
              <div className="resultText">
                <details
                  className="expandButton"
                  onClick={(e) => {
                    changeExpandState(number);
                  }}
                >
                  <summary>{number}</summary>
                </details>
              </div>
              <div className="resultText">{primary_subject}</div>
              <div className="resultText">{sponsor_name}</div>
              <div className="detailsLink">
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    history.push({
                      location: "/details/BillsDetails",
                      search: "bill_id=" + bill_id
                    });
                  }}
                >
                  details...
                </a>
              </div>
            </div>
            {titleExpanded && (
              <div className="expandableText expanded">{title}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export { BillsResults };
