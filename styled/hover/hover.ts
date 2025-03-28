import styled from 'styled-components';
import { screenSizes } from '../../utils/responsive';

//Componente para agregar transiciones dentro de los componentes hijos.
//Siempre y cuando el mouse pase por encima del componente HOVER.
export const Hover = styled.div`
  width: 100%;
  height: 100%;

  //Clase a la cual ocultar el elemento
  .none {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s all ease;
  }

  .translate {
    transform: translateY(150%);
    transition: 0.3s all ease;
  }

  //Clase a la cual mostrar el elemento a través de transicion
  &:hover .visibility {
    visibility: visible;
    opacity: 1;
    transition: 0.3s all ease;
  }

  &:hover .translate {
    transform: translateY(0%);
    transition: 0.3s all ease;
  }

  @media (max-width: ${screenSizes.XL}px) {
    .translate {
      display: none;
    }
  }

  @media (max-width: ${screenSizes.XM}px) {
    .visibility {
      visibility: visible;
      opacity: 1;
    }
  }
`;
