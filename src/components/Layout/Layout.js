import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '../Box/Box';

export const Layout = () => {
  return (
    <Box display='grid' height='100vh' gridTemplateColumns='200px 1fr'>
      <AppBar />
      <Suspense fallback={<h1>Layout is loading...</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
