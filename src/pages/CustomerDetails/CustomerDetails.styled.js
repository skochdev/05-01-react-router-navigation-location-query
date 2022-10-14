import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const BackLink = styled(Link)`
  display: block;
  font-size: ${(p) => p.theme.fontSizes.m};
  margin-bottom: 1rem;
`;
