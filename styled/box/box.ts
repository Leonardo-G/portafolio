import styled from "styled-components";

//Componente solamente para manejar las propiedades de estilo de una caja
export const Box = styled.div`
    height: ${ ({ height }: {
        height?: string;
        border?: string;
        borderTopNone?: boolean;
        padding?: string;
        background?: string;
        borderY?: string;
        width?: string;
    }) => height ? height : "fit-content" };
    ${ ({ border }) => border && { "border": border } };
    ${ ({ padding }) => padding && { "padding": padding } };
    ${ ({ borderY }) => borderY && { "border-left": borderY, "border-right": borderY } }
    ${ ({ borderTopNone }) => borderTopNone && { "border-top": "none" } };
    ${ ({ background }) => background && { "background": background } };
    ${ ({ width }) => width && { "width": width } };
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
        ovHidden?: boolean;
        border?: string;
    }) => center ? "center" : "inherit" };
    
    ${ ({ gap, columnGap }) => gap ? { "gap": `${ gap }px` } : columnGap && { "column-gap": `${ columnGap }px` } };
    ${ ({ wrap }) => wrap && { "flex-wrap": "wrap" } };
    ${ ({ colCenter }) => colCenter && { "align-items": "center" } };
    ${ ({ ovHidden }) => ovHidden && { "overflow": "hidden" } };

    //clases para colocar a los elementos hijos.
    .f-xs {
        flex: 0.2;
    }
    .f-auto{
        flex: 1
    }

    .f-2{
        flex: 2;
    }
` 