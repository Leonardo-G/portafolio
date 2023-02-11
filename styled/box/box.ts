import styled from "styled-components";
import { screenSizes } from "../../utils/responsive";

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
        transform?: string;
        ovHidden?: boolean;
        zIndex?: string;
        transition?: boolean;
        rotate?: string;
        radius?: string;
        none?: boolean;
        center?: boolean;
        hover?: {};
        overflowY?: boolean;
        dNone?: boolean;
    }) => height ? height : "fit-content" };
    ${ ({ padding }) => padding && { "padding": padding } };
    ${ ({ border }) => border && { "border": border } };
    ${ ({ borderY }) => borderY && { "border-left": borderY, "border-right": borderY } }
    ${ ({ borderTopNone }) => borderTopNone && { "border-top": "none" } };
    ${ ({ background }) => background && { "background": background } };
    ${ ({ width }) => width && { "width": width } };
    ${ ({ transform }) => transform && { "transform": transform } };
    ${ ({ ovHidden }) => ovHidden && { "overflow": "hidden" } };
    ${ ({ zIndex }) => zIndex && { "z-index": zIndex } };
    ${ ({ transition }) => transition && { "transition": ".3s all ease" } };
    ${ ({ rotate }) => rotate && { "transform": `rotate(${ rotate })` } };
    ${ ({ radius }) => radius && `border-radius: ${ radius }` };
    ${ ({ none }) => none && `visibility: hidden` };
    ${ ({ hover }) => hover && `&:hover ${ hover }` };
    ${ ({ center }) => center && "margin: 0 auto" };
    ${ ({ overflowY }) => overflowY && "overflow-y: scroll" };

    @media ( max-width: ${ screenSizes.XM }px ) {
        
        ${ ({ dNone }) => dNone && "display: none" };
    }
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
        justifyContent?: "space-between" | "space-around";
    }) => center ? "center" : "inherit" };
    
    ${ ({ gap, columnGap }) => gap ? { "gap": `${ gap }px` } : columnGap && { "column-gap": `${ columnGap }px` } };
    ${ ({ wrap }) => wrap && { "flex-wrap": "wrap" } };
    ${ ({ colCenter }) => colCenter && { "align-items": "center" } };
    ${ ({ ovHidden }) => ovHidden && { "overflow": "hidden" } };
    ${ ({ justifyContent }) => justifyContent && `justify-content: ${ justifyContent }` };

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