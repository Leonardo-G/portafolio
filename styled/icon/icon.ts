import styled from "styled-components";
import { screenSizes } from "../../utils/responsive";

export const IconSize = styled.div`
    font-size: ${ ({ size }: {
        size?: number;
        sizeXL?: number;
    }) => size ? `${ size }px` : "16px" };
    
    @media (max-width: ${ screenSizes.XL }px ){
        ${ ({ sizeXL }) => sizeXL && `font-size: ${ sizeXL }px` };
    }
`

export const IconImage = styled.div`
    position: relative;
    ${ ({ size }: {
        size?:     number;
        sizeXL?:   number;
    }) => size && { width: `${ size }px`, height: `${ size }px` } };

    @media (max-width: ${ screenSizes.XL }px ){
        ${ ({ sizeXL }) => sizeXL && { width: `${ sizeXL }px`, height: `${ sizeXL }px` } };
    }
`