import React from 'react';
import { Pagination } from 'semantic-ui-react';

const CustomPagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={currentPage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={totalPages}
  />
);

export default CustomPagination;
