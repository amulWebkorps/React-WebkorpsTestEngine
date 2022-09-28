import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader({mt,ml}) {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", marginRight:`${ml}px` }} mt={mt}>
      <CircularProgress />
    </Box>
  );
}
