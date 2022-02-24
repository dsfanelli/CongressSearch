import React from "react";
/*
  Provides additional information behind a search
  result related to a congress member.
*/
const CongressMembersDetails = (props) => {
  const [congressmember] = props.data;
  const fields = Object.keys(congressmember);
  return (
    <div className="resultDetails">
      {fields.map((field) => (
        <div className="resultDetail">
          <div className="fieldName">{field}</div>
          <div>{congressmember[field]}</div>
        </div>
      ))}
    </div>
  );
};
export { CongressMembersDetails };
