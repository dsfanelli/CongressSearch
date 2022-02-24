import React from "react";
/*
  These are the navigation links which allow the user to 
  change the search topic when clicking/tapping on the name of the
  topic displayed in these links. The search topic may effect
  what is displayed such as the search form. For reusability and
  hiding its outside environment, it accepts a callback for handling 
  what happens when a user changes topic. 
*/
const SearchTopicNavBar = (props) => {
  const { searchTopic, updateSearchTopic } = props;
  const handleTopicSelection = (e) => {
    const clickedTopic = e.target.name;
    updateSearchTopic(clickedTopic);
  };
  return (
    <div className="searchTopicNav">
      <button
        className="topicOption "
        name="congressmembers"
        onClick={handleTopicSelection}
      >
        Congress Members
      </button>
      <button
        className="topicOption"
        name="bills"
        onClick={handleTopicSelection}
      >
        Bills
      </button>
    </div>
  );
};
export { SearchTopicNavBar };
