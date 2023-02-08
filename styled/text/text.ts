import styled from "styled-components";

//ESTILO principal para titulo H1.
export const TitleMain = styled.h1`
    font-size: ${ ({ size }: { 
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
    }) => size ? `${ size }px` : `24px` };
`

//ESTILO para el titulo H2.
export const Title = styled.h2`
    font-size: ${ ({ size }: { 
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        color?: string;
    }) => size ? `${ size }px` : `24px` };
    color: ${ ({ color }) => color ? color : "#fff" };
`

export const Text = styled.p`
    font-size: ${ ({ size }: {
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        color?: string;
        weight?: number;
        paddingBt?: boolean;
    }) => size ? `${ size }px` : "16px" };
    color: ${ ({ color }) => color ? color : "#000" };
    ${ ({ weight }) => weight && `font-weight: ${ weight }` };
    ${ ({ paddingBt }) => paddingBt && `padding-bottom: 15px` };
`

export const TextLink = styled.a`
    font-size: ${ ({ size }: {
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        color?: string;
        weight?: number;
    }) => size ? `${ size }px` : "16px" };
    color: ${ ({ color }) => color ? color : "#000" };
    ${ ({ weight }) => weight && `font-weight: ${ weight }` };
`