import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination count={10} color="primary" variant="outlined" shape="rounded" />
    </Stack>
  );
}