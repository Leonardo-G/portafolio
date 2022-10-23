import React, { useContext, useEffect } from 'react';
import Image from 'next/image';

import styles from "../../styles/section/Portada.module.css";
import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

export const Portada = () => {

    
    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "inicio" )
        }
    }, [inView])

    return (
        <div ref={ ref } className={ styles.portada } id="inicio">
            <div className={ styles.portada__texto }>
                <p>BIENVENIDO!</p>
                <h1>Hola! Me llamo Leonardo Guanuco y soy Desarrollador de JavaScript</h1>
            </div>
            <div className={`${ styles.caja } ${ styles.caja_1 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_2 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_3 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_4 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_5 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_6 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_7 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_8 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_9 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_10 } `}></div>
            <div className={`${ styles.caja } ${ styles.caja_11} `}></div>
            <div className={ styles.imgContainer }>
                <Image
                    src="/static/portfolio.jpg"
                    alt='Image Portafolio'
                    layout='fill'
                    objectFit='contain'
                />  
            </div>
        </div>
    )
}
