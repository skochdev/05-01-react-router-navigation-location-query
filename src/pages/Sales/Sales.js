import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as S from './Sales.styled';
import { Box } from 'components/Box/Box';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const Sales = () => {
  return (
    <Box as='main' display='flex' flexDirection='column'>
      <Box as='header' borderBottom='1px solid black' p={4}>
        <Box as='ul' display='flex'>
          {navItems.map(({ href, text }) => (
            <S.NavItem key={href} to={href}>
              {text}
            </S.NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={<div>Sales page is loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

// lazy() method expects a loader function that returns the result of the dynamic import
export default Sales;
