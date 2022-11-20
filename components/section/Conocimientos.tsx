import React, { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { conocimientosDB } from '../../database/conocimientos';
import { ConocimientoFile } from '../UI/ConocimientoFile';

import styles from "../../styles/section/Conocimientos.module.css";

export const Conocimientos = () => {
    const [isHover, setIsHover] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5
    })
    
    useEffect(() => {
        if( inView && !isHover ){
            setIsHover( true )
        }

    }, [inView])

    return (
        <div  ref={ ref } className={ styles.conocimientos } id="conocimientos">
            <h2 className={ styles.conocimientos__titulo }>CONOCIMIENTOS</h2>
            <div className={ styles.conocimientos__iconos }>
                {
                    conocimientosDB.map( (c, idx) => (
                        <ConocimientoFile 
                            conocimiento={ c } 
                            key={ c.id } 
                            number={ idx }
                            isHover={ isHover }
                        />
                    ))
                }
            </div>
        </div>
    )
}
