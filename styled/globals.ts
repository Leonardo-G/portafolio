import styled from "styled-components";

//ESTILOS COMPONENTES PRINCIPALES
export const Section = styled.section`
    height: ${ ({ height }: { 
        height?: number;
        background?: string;
        ovHidden?: boolean;
        
     }) => height ? `${ height }px` : "fit-content" };
    background: ${ ({ background }) => background ? background : "transparent" };
    position: relative;
    padding: 100px 0;
    ${ ({ ovHidden }) => ovHidden && "overflow: hidden" };
`