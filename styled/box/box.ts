import styled from 'styled-components';
import { screenSizes } from '../../utils/responsive';

//Componente solamente para manejar las propiedades de estilo de una caja
export const Box = styled.div`
  height: ${({
    height,
  }: {
    height?: string;
    scrollY?: boolean;
    heightXM?: string;
    border?: string;
    borderTopNone?: boolean;
    padding?: string;
    background?: string;
    borderY?: string;
    width?: string;
    transform?: string;
    ovHidden?: boolean;
    zIndex?: string;
    transition?: boolean;
    rotate?: string;
    radius?: string;
    none?: boolean;
    center?: boolean;
    hover?: unknown;
    overflowY?: boolean;
    dNoneXL?: boolean;
    dNone?: boolean;
  }) => (height ? height : 'fit-content')};
  ${({ padding }) => padding && { padding: padding }};
  ${({ border }) => border && { border: border }};
  ${({ borderY }) =>
    borderY && { 'border-left': borderY, 'border-right': borderY }}
  ${({ borderTopNone }) => borderTopNone && { 'border-top': 'none' }};
  ${({ background }) => background && { background: background }};
  ${({ width }) => width && { width: width }};
  ${({ transform }) => transform && { transform: transform }};
  ${({ ovHidden }) => ovHidden && { overflow: 'hidden' }};
  ${({ zIndex }) => zIndex && { 'z-index': zIndex }};
  ${({ transition }) => transition && { transition: '.3s all ease' }};
  ${({ rotate }) => rotate && { transform: `rotate(${rotate})` }};
  ${({ radius }) => radius && `border-radius: ${radius}`};
  ${({ none }) => none && `visibility: hidden`};
  ${({ hover }) => hover && `&:hover ${hover}`};
  ${({ center }) => center && 'margin: 0 auto'};
  ${({ overflowY }) => overflowY && 'overflow-y: scroll'};

  @media (max-width: ${screenSizes.XL}px) {
    ${({ dNoneXL }) => dNoneXL && 'display: none'};
  }

  @media (max-width: ${screenSizes.XM}px) {
    ${({ heightXM }) => heightXM && `height: ${heightXM}`};
    ${({ dNone }) => dNone && 'display: none'};
  }
`;

//COMPONENTE para utilizar propiedades FLEX
export const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: ${({
    center,
  }: {
    center?: boolean;
    colCenter?: boolean;
    wrap?: boolean;
    column?: boolean;
    columnGap?: number;
    gap?: number;
    ovHidden?: boolean;
    border?: string;
    justifyContent?: 'space-between' | 'space-around';

    columnXS?: boolean;
    columnReverseXS?: boolean;
  }) => (center ? 'center' : 'inherit')};
  ${({ column }) => column && 'flex-direction: column'};
  ${({ gap, columnGap }) =>
    gap
      ? { gap: `${gap}px` }
      : columnGap && { 'column-gap': `${columnGap}px` }};
  ${({ wrap }) => wrap && { 'flex-wrap': 'wrap' }};
  ${({ colCenter }) => colCenter && { 'align-items': 'center' }};
  ${({ ovHidden }) => ovHidden && { overflow: 'hidden' }};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};

  //clases para colocar a los elementos hijos.
  .f-xs {
    flex: 0.2;
  }
  .f-auto {
    flex: 1;
  }

  .f-2 {
    flex: 2;
  }

  @media (max-width: ${screenSizes.XS}px) {
    ${({ columnXS }) => columnXS && 'flex-direction: column'};
    ${({ columnReverseXS }) =>
      columnReverseXS && 'flex-direction: column-reverse'};
  }
`;
