import styled from 'styled-components/macro';

export const CustomersList = styled.ul`
  font-size: 1.6rem;
  display: flex;
  flex-flow: column nowrap;

  li + li {
    margin-top: 1rem;
  }
`;
