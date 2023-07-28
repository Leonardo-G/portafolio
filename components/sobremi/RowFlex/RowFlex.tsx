import React from 'react'
import { Knowledge } from '../Knowledge/Knowledge'

import style from "./RowFlex.module.css";
import { conocimientosDB } from '../../../database/conocimientos';

export const RowFlex = () => {
    return (
        <div className={ style.rowFlex }>
            <div className={ style.rowFlex__left }>
                <h3>FrontEnd</h3>
                <p>Mi nombre es Leonardo y soy desarrollador de JavaScript, donde me especializo en el desarrollo FrontEnd y/o BackEnd. </p>
            </div>
            <div className={ style.rowFlex__rigth }>
                {
                    conocimientosDB.filter(c => c.stack === 'front').map( (c, idx) => (
                        <Knowledge 
                            key={ c.id }
                            idx={ idx + 1 }
                            { ...c }
                        />
                    ))
                }
            </div>
        </div>
    )
}
