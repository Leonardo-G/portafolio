import React from 'react'
import { Knowledge } from '../Knowledge/Knowledge'

import style from "./RowFlex.module.css";
import { conocimientosDB } from '../../../database/conocimientos';
import { TextHeading } from '../../text/TextHeading';

export const RowFlex = () => {
    return (
        <div className={ style.rowFlex }>
            <div className={ style.rowFlex__left }>
                <TextHeading 
                    title='BackEnd'
                    text='Mi nombre es Leonardo y soy desarrollador de JavaScript, donde me especializo en el desarrollo FrontEnd y/o BackEnd. '
                />
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
