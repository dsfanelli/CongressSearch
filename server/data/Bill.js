/*
  Handles data fetching and construction of congressional bill objects
*/
const billsMetaData = require("../db/metaData/BillsMetaData.js").billsMetaData;
const db = require("../db/dbClient.js").dbClient;
const fieldNames = Object.keys(billsMetaData.fields);
const defaultBillObject = fieldNames.reduce((object, fieldName) => {
  const fieldType = billsMetaData.fields[fieldName];
  if (fieldType === "String") {
    object[fieldName] = "";
  } else if (fieldType === "Integer") {
    object[fieldName] = 0;
  } else if (fieldType === "Double") {
    object[fieldName] = 0.0;
  } else if (fieldType === "Boolean") {
    object[fieldName] = false;
  } else if (fieldType === "Date") {
    const date = new Date();
    object[fieldName] =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  } else if (fieldType === "Timestamp") {
    object[fieldName] = Date.now();
  } else if (fieldType === "Object") {
    object[fieldName] = {};
  } else if (fieldType === "Array") {
    object[fieldName] = [];
  }
  return object;
}, {});

const buildBillObject = (billData = {}) => {
  var billObject = { ...defaultBillObject };
  fieldNames.forEach((fieldName) => {
    billObject[fieldName] = billData[fieldName] || defaultBillObject[fieldName];
  });
  return billObject;
};
const fetchBills = async (params = {}) => {
  const tableName = billsMetaData.name;
  const bills = await db
    .query(tableName, params)
    .then((bills) => bills.map((bill) => buildBillObject(bill)));
  return bills;
};
module.exports = { fetchBills };
