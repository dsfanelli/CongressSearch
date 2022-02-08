import React, { useEffect } from "react";
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
