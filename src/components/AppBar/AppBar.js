import * as S from './AppBar.styled';
import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { Box } from '../Box/Box';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

export const AppBar = () => {
  return (
    <Box as='header' p={4} height='100vh' borderRight='1px solid black'>
      <Box as='nav' display='flex' flexDirection='column'>
        {navItems.map(({ href, text, icon: Icon }) => (
          <S.NavItem to={href} key={href}>
            <Icon size='1.6rem' />
            {text}
          </S.NavItem>
        ))}
      </Box>
    </Box>
  );
};
