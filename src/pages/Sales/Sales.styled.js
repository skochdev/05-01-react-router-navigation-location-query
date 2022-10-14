import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: ${(p) => p.theme.space[1]}rem;
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;

  & + & {
    border-left: ${(p) => p.theme.borders[1]};
  }

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }
`;
