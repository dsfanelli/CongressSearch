import React from "react";
const PageNav = (props) => {
  const { pageNum, changePageNum } = props;
  return (
    <div className="pageNav">
      <button
        className="pageControl"
        onClick={() => {
          changePageNum(Math.max(pageNum - 1, 1));
        }}
      >
        <span className="arrow left"></span>
      </button>
      <span className="pageNum">{pageNum}</span>
      <button
        className="pageControl"
        onClick={() => {
          changePageNum(pageNum * 1 + 1);
        }}
      >
        <span className="arrow right"></span>
      </button>
    </div>
  );
};
export { PageNav };
