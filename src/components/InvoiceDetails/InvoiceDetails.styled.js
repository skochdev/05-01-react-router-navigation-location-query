import styled from 'styled-components/macro';

export const Detail = styled.li`
  font-size: ${(p) => p.theme.fontSizes.m};

  & + & {
    margin-top: ${(p) => p.theme.space[4]}px;
  }

  & span {
    font-weight: ${(p) => p.theme.fontWeights[3]};
  }
`;

export const InvoiceDetails = styled.ul`
  padding: ${(p) => p.theme.space[4]}px;
`;
