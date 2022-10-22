import React from 'react';

import { conocimientosDB } from '../../database/conocimientos';
import { ConocimientoFile } from '../UI/ConocimientoFile';
import styles from "../../styles/section/Conocimientos.module.css";

export const Conocimientos = () => {
    return (
        <div className={ styles.conocimientos }>
            <h2 className={ styles.conocimientos__titulo }>CONOCIMIENTOS</h2>
            <div className={ styles.conocimientos__iconos }>
                {
                    conocimientosDB.map( c => (
                        <ConocimientoFile conocimiento={ c } key={ c.id } />
                    ))
                }
            </div>
        </div>
    )
}
