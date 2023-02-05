import styled from "styled-components";

//ESTILO principal para titulo H1.
export const TitleMain = styled.h1`
    font-size: ${ ({ size }: { 
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
    }) => size ? `${ size }px` : `24px` };
`

export const Text = styled.p`
    font-size: ${ ({ size }: {
        size?: number;    // Tamaño que va a tener la letra cuando este en tamaño de escritorio.
        
    }) => size ? `${ size }px` : "16px" };
`