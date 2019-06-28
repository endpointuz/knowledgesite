import React, { useState } from 'react';

const Pagination = (
  {
    totalCount = 50,
    perPage = 10,
    defaultActive = 1,
    onChange,
  },
) => {
  const [activePage, setActivePage] = useState(defaultActive);

  const totalPages = totalCount / perPage;

  const handleChange = page => (event) => {
    event.preventDefault();
    setActivePage(page);
    onChange(page);
  };

  const renderPaginationItem = (number, active) => (
    <div className="pagination-page" key={number}>
      <a href="" onClick={handleChange(number)} className={`pagination-page-link${active === number ? ' active' : null}`}>{number}</a>
    </div>
  );

  const renderPaginationItems = (count, active, acc = []) => {
    if (count <= 1) return [renderPaginationItem(1, active), ...acc];
    return renderPaginationItems(
      count - 1,
      active,
      [renderPaginationItem(count, active), ...acc],
    );
  };

  return (
    <div className="pagination">
      {renderPaginationItems(Math.floor(totalPages), activePage)}
    </div>
  );
};

export default Pagination;
