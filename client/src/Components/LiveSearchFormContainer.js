import React, { useRef } from "react";
/*
  This gives live search functionality to a search form 
  (i.e., when a user enters text or chooses from a dropdown,
  the query is fired automatically). It's designed to be 
  reusable and agnostic about how the form is submitted. 
  It supplies the form with a reusable handleChange handler which 
  responds to user actions against the form and debounces queries 
  to limit frequency of server requests (i.e. in case the user
  types to quickly).
*/
const LiveSearchFormContainer = (props) => {
  /*
    formFields: an object containing key value pairs
    of search parameters and their values. It maintains the state
    of the form's values between each query (i.e. if the user types
    "birds", "birds" will remain visible in the form). This could've
    been local state, but we can't have state living in two places
  
    submitSearch: is a callack that handles form data submission

    SearchForm: the actual UI component that will be receiving 
    the change handler and the query state.
  */

  const { formFields, submitSearch, SearchForm } = props;
  const timeout = useRef(null);
  const handleChange = (e) => {
    //debounce input to limit api calls
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      let { name, value, type } = e.target;
      //apply regex carat to allow search by matching prefix
      value = type === "text" && value !== "" ? "^" + value.trim() : value;
      if (value === "") {
        delete formFields[name];
      } else {
        formFields[name] = value;
      }
      submitSearch({ ...formFields });
    }, 100);
  };
  //copy fieldParams and remove prefix search regex carat so it doesn't display in textboxes
  let formFieldsCopy = { ...formFields };
  Object.keys(formFieldsCopy).forEach((fieldName) => {
    if (formFieldsCopy[fieldName].startsWith("^")) {
      formFieldsCopy[fieldName] = formFieldsCopy[fieldName].substring(1);
    }
  });
  return (
    <div className="searchFormContainer">
      <SearchForm formData={formFieldsCopy} handleChange={handleChange} />
    </div>
  );
};
export { LiveSearchFormContainer };
