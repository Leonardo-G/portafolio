import styled from 'styled-components';
import { screenSizes } from '../../utils/responsive';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({
    gap,
  }: {
    gap?: number;
    gapXM?: number;
    rows?: string;
    rowsXM?: string;
  }) => (gap ? `${gap}px` : '0px')};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};

  @media (max-width: ${screenSizes.XM}px) {
    ${({ rowsXM }) => rowsXM && `grid-template-rows: ${rowsXM}`};
    ${({ gapXM }) => gapXM && `gap: ${gapXM}px`}
  }
`;

export const GridChildren = styled.div`
  grid-column: ${({ column }: { column: number; opacity?: string }) =>
    column ? `span ${column}` : '1'};
  overflow: hidden;

  ${({ opacity }) => opacity && `opacity: ${opacity}`};
`;
