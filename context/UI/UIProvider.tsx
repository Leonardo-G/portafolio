import React, { FC, ReactNode, useState } from 'react'
import { UIContext } from './UIContext'

interface Props {
    children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [campo, setCampo] = useState("inicio");
    const [isHover, setIsHover] = useState(false);

    const changeCampoNav = ( campoNav: string ) => {
        setCampo( campoNav )
    }

    const onHover = () => {
        setIsHover(true);
    }

    const outHover = () => {
        setIsHover(false);
    }

    return (
        <UIContext.Provider value={{
            campo,
            isHover,

            //methods
            changeCampoNav,
            onHover,
            outHover
        }}>
            { children }
        </UIContext.Provider>
    )
}
