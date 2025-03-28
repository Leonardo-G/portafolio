import styled from 'styled-components';
import { screenSizes } from '../../utils/responsive';

export const IconSize = styled.div`
  font-size: ${({
    size,
  }: {
    size?: number;
    sizeXL?: number;
    sizeXM?: number;
  }) => (size ? `${size}px` : '16px')};

  @media (max-width: ${screenSizes.XL}px) {
    ${({ sizeXL }) => sizeXL && `font-size: ${sizeXL}px`};
  }

  @media (max-width: ${screenSizes.XM}px) {
    ${({ sizeXM }) => sizeXM && `font-size: ${sizeXM}px`};
  }
`;

export const IconImage = styled.div`
  position: relative;
  ${({ size }: { size?: number; sizeXL?: number; sizeXM?: number }) =>
    size && { width: `${size}px`, height: `${size}px` }};

  @media (max-width: ${screenSizes.XL}px) {
    ${({ sizeXL }) =>
      sizeXL && { width: `${sizeXL}px`, height: `${sizeXL}px` }};
  }

  @media (max-width: ${screenSizes.XM}px) {
    ${({ sizeXM }) =>
      sizeXM && { width: `${sizeXM}px`, height: `${sizeXM}px` }};
  }
`;
