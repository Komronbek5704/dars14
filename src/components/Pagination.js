import { useState } from 'react';
import { Pagination as FlowbitePagination } from 'flowbite-react';

function Pagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <FlowbitePagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}

export default Pagination;
