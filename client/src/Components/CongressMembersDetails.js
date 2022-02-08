import React from "react";
/*
  Provides additional information behind a search
  result related to a congress member.
*/
const CongressMembersDetails = (props) => {
  const congressmember = props.data;
  const fields = Object.keys(congressmember);
  return (
    <div className="resultDetails">
      {fields.map((field) => (
        <div className="resultDetail">
          <div>
            <h2>{field}</h2>
          </div>
          <div>{congressmember[field]}</div>
        </div>
      ))}
    </div>
  );
};
export { CongressMembersDetails };
