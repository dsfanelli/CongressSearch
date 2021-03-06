/*
  Provides additional information behind a search
  result related to a bill.
*/
import React from "react";
const BillsDetails = (props) => {
  const [bill] = props.data;
  const fields = Object.keys(bill);
  return (
    <div className="resultDetails">
      {fields.map((field) => {
        return (
          <div className="resultDetail">
            <div className="fieldName">{field}</div>
            <div>{bill[field]}</div>
          </div>
        );
      })}
    </div>
  );
};
export { BillsDetails };
