import React, { FC, ReactNode, useState } from 'react'
import { UIContext } from './UIContext'

interface Props {
    children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [campo, setCampo] = useState("inicio");

    const changeCampoNav = ( campoNav: string ) => {
        setCampo( campoNav )
    }

    return (
        <UIContext.Provider value={{
            campo,

            //methods
            changeCampoNav
        }}>
            { children }
        </UIContext.Provider>
    )
}
