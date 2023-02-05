import styled from "styled-components";

export const BoxWhite = styled.div`
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    width: ${ ({ width }: { 
        width: string;
        height: number;
        top?: string;
        left?: string; 
        right?: string;
        bottom?: string;
        hover?: boolean;
    }) => width && `${ width }` };
    transition: all ease .5s;
    height: ${ ({ height }) => `${ height }px` };
    top: ${ ({ top }) => top && top };
    left: ${ ({ left }) => left && left };
    right: ${ ({ right }) => right && right };
    bottom: ${ ({ bottom }) => bottom && bottom };
 
    @media (max-width: 920px){

    }

    @media (max-width: 720px){
        height: ${ ({ height }) => `${ height * 0.62 }px` };
    }

    &:hover{
        transform: scale(90%);
        transition: all ease .5s;
    }
`