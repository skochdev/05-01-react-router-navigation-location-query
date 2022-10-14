import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const CustomersList = styled.ul`
  display: flex;
  padding: ${(p) => p.theme.space[1]}rem;
  font-size: 1.6rem;
  flex-flow: column nowrap;
`;

export const CustomerLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.text};
  transition: color 150ms ease-in-out;

  & + & {
    margin-top: 1rem;
  }

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.secondary};
  }
`;
