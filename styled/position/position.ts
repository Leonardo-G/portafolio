import styled from "styled-components";

//ESTILO para ubicar un elemento en
export const Position = styled.div`
    position: absolute;
    top: ${ ({ top }: {
        top?: string;
        bottom?: string;
        left?: string;
        zIndex?: number;
        width?: string;
    }) => top && top };
    left: ${ ({ left }) => left && left };
    bottom: ${ ({ bottom }) => bottom && bottom };
    z-index: ${ ({ zIndex }) => zIndex ? zIndex : 1 };
    ${ ({ width }) => width && `width: ${ width }` }
`