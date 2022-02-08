import { React } from "react";
import { useHistory } from "react-router-dom";
import { APIFetcher } from "./APIFetcher";
import { apiURLBuilder } from "../searchUtils/URLBuilderForSearchAPI";
/*
  This is the component that handles the high level logic
  for fetching and displaying details related to a search
  result the user wants more info on. It's designed to be
  reusable. It accepts a UI component for displaying that 
  data (DetailsContainer) and the topic which will be used 
  with the query string to construct the request url via the 
  apiURLBuilder. As of now, the topic is in the page url but we 
  still need to pass it as a prop bc otherwise we would have to 
  assume the page url's structure which is much more likely to 
  change than the use of a query string Sfor searching. 
*/

const DetailsPage = (props) => {
  const { searchTopic, DetailsContainer } = props;
  const history = useHistory();
  const fieldParams = history.location.search;
  const urlForSearchAPI = apiURLBuilder.buildAPIURL({
    searchTopic,
    fieldParams
  });
  return (
    <div className="details">
      {<APIFetcher URL={urlForSearchAPI} ResultsContainer={DetailsContainer} />}
    </div>
  );
};

export { DetailsPage };
