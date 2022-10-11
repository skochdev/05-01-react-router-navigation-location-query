import { Outlet } from 'react-router-dom';
import * as S from './Sales.styled';
import { Box } from 'components/Box';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

export const Sales = () => {
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
      <Outlet />
    </Box>
  );
};
