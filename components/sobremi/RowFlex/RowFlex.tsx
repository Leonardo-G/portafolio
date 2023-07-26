import React from 'react'
import { Knowledge } from '../Knowledge/Knowledge'

import style from "./RowFlex.module.css";

export const RowFlex = () => {
    return (
        <div className={ style.rowFlex }>
            <div className={ style.rowFlex__left }>
                <h3>FrontEnd</h3>
                <p>Mi nombre es Leonardo y soy desarrollador de JavaScript, donde me especializo en el desarrollo FrontEnd y/o BackEnd. </p>
            </div>
            <div>
                <Knowledge />
            </div>
        </div>
    )
}
