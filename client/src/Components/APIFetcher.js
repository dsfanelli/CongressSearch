/*
  This component is responsible for fetching data from a server
  and supplying that data to a component passed to it. It
  provides reusable data fetching logic that can be used by
  any component passed to it.
*/

import React, { useEffect, useState, useRef } from "react";
const APIFetcher = (props) => {
  const { URL, ResultsContainer } = props;
  const [searchState, setSearchState] = useState({
    isLoading: false,
    results: null,
    errMessage: ""
  });

  const fetchData = async (URL) => {
    setSearchState({ ...searchState, isLoading: true });
    let res = [];
    let err = "";
    try {
      res = await fetch(URL);
    } catch (error) {
      err = error.toString();
    } finally {
      if (!err) {
        res = await res.json();
      }
      setSearchState({
        isLoading: false,
        results: res,
        errMessage: err
      });
    }
  };
  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  const { isLoading, results, errMessage } = searchState;
  /*
    prevURL stores the previous URL used to fetch data for comparison
    with the curent fetch URL passed in to props. If it's value
    is different from the current URL, readyToLoad is true and 
    we are starting a new search. The prevURL ref takes the current URL 
    and we return a blank div before firing fetchData in the
    useEffect hook. If the two urls are the same, the old
    results will be returned.
  */
  const prevURL = useRef("");
  const readyToLoad = prevURL.current !== URL;
  return (
    <div className="APIFetchContainer">
      {(() => {
        if (readyToLoad === true) {
          prevURL.current = URL;
          return "";
        }
        if (isLoading === true) {
          return <div className="loading"></div>;
        }
        if (errMessage !== "") {
          return errMessage;
        }
        return <ResultsContainer searchResults={results} />;
      })()}
    </div>
  );
};
export { APIFetcher };
