import styled from 'styled-components/macro';

export const Label = styled.label`
  display: flex;
  margin-bottom: ${(p) => p.theme.space[1]}rem;
  flex-flow: column nowrap;
  font-size: ${(p) => p.theme.fontSizes.l};
`;

export const Filter = styled.div`
  border-bottom: ${(p) => p.theme.borders[1]};
  padding: ${(p) => p.theme.space[1]}rem;
`;

export const Input = styled.input`
  margin-top: 1rem;
  max-width: ${(p) => p.theme.space[6]}rem;
`;
