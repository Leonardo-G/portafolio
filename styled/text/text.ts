import styled from "styled-components";
import { screenSizes } from "../../utils/responsive";

//ESTILO principal para titulo H1.
export const TitleMain = styled.h1`
    font-size: ${ ({ size }: { 
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        sizeXL?: number;
    }) => size ? `${ size }px` : `24px` };
    line-height: 1;
    
    @media ( max-width: ${ `${ screenSizes.XL }px` } ){
        ${ ({ sizeXL }) => sizeXL && `font-size: ${ sizeXL }px` };
    }
`

//ESTILO para el titulo H2.
export const Title = styled.h2`
    font-size: ${ ({ size }: { 
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        sizeXL?: number;
        
        color?: string;
        center?: boolean;
    }) => size ? `${ size }px` : `24px` };
    color: ${ ({ color }) => color ? color : "#fff" };
    ${ ({ center }) => center && "text-align: center" };
    
    @media ( max-width: ${ `${ screenSizes.XL }px` } ){
        ${ ({ sizeXL }) => sizeXL && `font-size: ${ sizeXL }px` };
    }
`

export const Text = styled.p`
    font-size: ${ ({ size }: {
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        sizeXL?: number;
        sizeXM?: number;

        color?: string;
        weight?: number;
        paddingBt?: boolean;
        center?: boolean;
        family?: string;
        width?: string;
        lh?: string;
    }) => size ? `${ size }px` : "16px" };
    color: ${ ({ color }) => color ? color : "#000" };
    ${ ({ weight }) => weight && `font-weight: ${ weight }` };
    ${ ({ paddingBt }) => paddingBt && `padding-bottom: 15px` };
    ${ ({ center }) => center && "text-align: center" };
    ${ ({ family }) => family && `font-family: ${ family }` };
    ${ ({ width }) => width && `width: ${ width }` };
    ${ ({ lh }) => lh && `line-height: ${ lh }` };
    
    @media ( max-width: ${ `${ screenSizes.XL }px` } ){
        ${ ({ sizeXL }) => sizeXL && `font-size: ${ sizeXL }px` };
    }

    @media ( max-width: ${ `${ screenSizes.XM }px` } ){
        font-size: ${ ({ sizeXL, sizeXM, size }) => sizeXL ? `${ sizeXL }px` : sizeXM ? `{ sizeXM }px` : size ? `{ size }px` : "14px" };
    }
`

export const TextLink = styled.a`
    font-size: ${ ({ size }: {
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        sizeXL?: number;
        color?: string;
        weight?: number;
    }) => size ? `${ size }px` : "16px" };
    color: ${ ({ color }) => color ? color : "#000" };
    ${ ({ weight }) => weight && `font-weight: ${ weight }` };
    
    @media ( max-width: ${ `${ screenSizes.XL }px` } ){
        ${ ({ sizeXL }) => sizeXL && `font-size: ${ sizeXL }px` };
    }
`