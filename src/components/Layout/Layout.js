import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box';

export const Layout = () => {
  return (
    <Box display='grid' height='100vh' gridTemplateColumns='200px 1fr'>
      <AppBar />
      <Outlet />
    </Box>
  );
};
