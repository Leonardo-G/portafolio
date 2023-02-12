import styled from "styled-components";
import { screenSizes } from "../utils/responsive";

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

export const LineHead = styled.div`
    background: ${ ({ background }: {
        background: string;
        height?: number;
    }) => background && background };
    border-bottom: 3px solid #fff;
    border-top: 3px solid #fff;
    text-align: center;
    overflow: hidden;
    width: 150%;
`

export const Button = styled.button`
    border: none;
    color: #fff;
    background: #000;
    padding: 20px;
    margin-top: 50px;
`

export const Input = styled.input`
    padding: 20px 30px;
    border-radius: 20px;
    outline: none;
    border: 1px solid #000;
    font-weight: 600;
    width: 100%;
    font-size: 16px;
    margin-bottom: 40px;
`

export const TextArea = styled.textarea`
    padding: 20px 30px;
    border-radius: 20px;
    outline: none;
    border: 1px solid #000;
    font-weight: 600;
    width: 100%;
    font-size: 16px;
`

export const ButtonForm = styled.button`
    padding: 20px;
    background: yellow;
    border-radius: 16px;
    border: none;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
`

export const NavBar = styled.div`
    display: none;
    cursor: pointer;

    @media ( max-width: ${ screenSizes.XL }px ){
        display: inherit
    }
`

export const NavResponsive = styled.div`
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    z-index: 999;
    transform: ${ ({ active }: { active: boolean }) => active ? "translateX(0%)" : "translateX(100%)" };
    transition: .5s all ease;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;

    @media ( max-width: 920px ){
        display: flex;
    }
`
