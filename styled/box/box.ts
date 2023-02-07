import styled from "styled-components";

export const Box = styled.div`
    height: ${ ({ height }: {
        height?: string;
    }) => height ? height : "fit-content" };
`

//COMPONENTE para utilizar propiedades FLEX
export const Flex = styled.div`
    display: flex;
    justify-content: ${ ({ center }: { 
        center?: boolean;
        colCenter?: boolean;
        wrap?: boolean;
        columnGap?: number;
        gap?: number;
    }) => center ? "center" : "inherit" };
    
    ${ ({ gap, columnGap }) => gap ? { "gap": `${ gap }px` } : columnGap && { "column-gap": `${ columnGap }px` } };
    ${ ({ wrap }) => wrap && { "flex-wrap": "wrap" } };
    ${ ({ colCenter }) => colCenter && { "align-items": "center" } };

    //clases para colocar a los elementos hijos.
    .f-auto{
        flex: 1
    }
` 