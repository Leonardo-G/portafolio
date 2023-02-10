import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat( 12, 1fr );
    gap: ${ ({ gap }: { 
        gap?: number;
        rows?: string;
    }) => gap ? `${ gap }px` : "0px" };
    ${ ({ rows }) => rows && `grid-template-rows: ${ rows }` }
`

export const GridChildren = styled.div`
    grid-column: ${ ({ column }: {
        column: number;
    }) => column ? `span ${ column }` : "1" };
`