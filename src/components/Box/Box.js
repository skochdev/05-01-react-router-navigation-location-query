import styled from 'styled-components/macro';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography,
} from 'styled-system';

// This is a default reusable box

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography
);
