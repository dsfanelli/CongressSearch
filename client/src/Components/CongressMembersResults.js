import React from "react";
import { useHistory } from "react-router-dom";
/*
  Search results returned from a search against
  congress members
*/
const CongressMembersResults = (props) => {
  const searchResults = props.data;
  const history = useHistory();
  return (
    <div className="searchResults">
      {searchResults.map((member, index) => {
        const { first_name, last_name, party, state, ...rest } = member;
        const rowEven = index % 2 === 0;
        return (
          <div
            className={"searchResultRow " + (rowEven ? "evenRow" : "oddRow")}
          >
            <div className="searchResultRowCells">
              <div className="resultCell">{first_name + " " + last_name}</div>
              <div className="resultCell">{party}</div>
              <div className="resultCell">{state}</div>
              <div className="resultCell">
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    history.push({
                      pathname: "/details/congressmembers",
                      search: "id=" + member.id
                    });
                  }}
                >
                  details...
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { CongressMembersResults };
