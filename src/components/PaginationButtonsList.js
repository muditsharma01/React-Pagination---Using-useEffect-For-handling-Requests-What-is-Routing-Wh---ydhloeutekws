import React from 'react';

const PaginationButtonList = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="pagination-button-list">
      {Array.from({ length: 20 }, (_, i) => (
        <button
          key={i + 1}
          id={`button-${i + 1}`}
          className={`page-btn ${currentPage === i + 1 ? 'active-btn' : ''}`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtonList;
