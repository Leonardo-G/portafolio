import styled from "styled-components";

//ESTILOS COMPONENTES PRINCIPALES
export const Section = styled.section`
    height: ${ ({ height }: { 
        height?: number;
        background?: string;
     }) => height ? `${ height }px` : "fit-content" };
    background: ${ ({ background }) => background ? background : "transparent" };
    position: relative;
    margin: 100px 0;
`