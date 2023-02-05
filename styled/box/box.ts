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
        columnGap?: number;
    }) => center ? "center" : "inherit" };
    
    ${ ({ columnGap }) => columnGap && { "column-gap": `${ columnGap }px` } };

    .f-auto{
        flex: 1
    }
` 