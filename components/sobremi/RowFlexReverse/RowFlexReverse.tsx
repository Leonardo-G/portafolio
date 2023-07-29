import React from 'react'
import { Knowledge } from '../Knowledge/Knowledge'

import { conocimientosDB } from '../../../database/conocimientos';
import style from "./RowFlexReverse.module.css";
import { TextHeading } from '../../text/TextHeading';

export const RowFlexReverse = () => {
    return (
        <div className={ style.rowFlex }>
            <div className={ style.rowFlex__left }>
                <TextHeading 
                    title='FrontEnd'
                    text='Mi nombre es Leonardo y soy desarrollador 
                    de JavaScript, donde me especializo en el 
                    desarrollo FrontEnd y/o BackEnd.'
                />
            </div>
            <div className={ style.rowFlex__rigth }>
                {
                    conocimientosDB.filter(c => c.stack === 'back').map( (c, idx) => (
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