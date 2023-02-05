import styled from "styled-components";

//ESTILO para ubicar un elemento en
export const Position = styled.div`
    position: absolute;
    top: ${ ({ top }: {
        top?: string;
        left?: string;
        zIndex?: number;
    }) => top && top };
    left: ${ ({ left }) => left && left };
    z-index: ${ ({ zIndex }) => zIndex ? zIndex : 1 };
`