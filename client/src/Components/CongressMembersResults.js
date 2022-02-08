import React from "react";
import { useHistory } from "react-router-dom";
/*
  Search results returned from a search against
  congress members
*/
const CongressMembersResults = (props) => {
  const { searchResults } = props;
  const history = useHistory();
  return (
    <div className="searchResults">
      {searchResults.map((member, index) => {
        const { first_name, last_name, party, state, ...rest } = member;
        const rowEven = index % 2 === 0;
        return (
          <div
            className={"searchResultRow " + (rowEven ? "evenRow" : "oddRow")}
            key={member.id}
          >
            <div className="searchResultRowCells">
              <div className="resultText">{first_name + " " + last_name}</div>
              <div className="resultText">{party}</div>
              <div className="resultText">{state}</div>
              <div className="resultText">
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    history.push({
                      location: "/details/CongressMemberDetails",
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
