import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/section/Portada.module.css";

export const Portada = () => {

    const { changeCampoNav, isHover } = useContext(UIContext);
    const [isOn, setIsOn] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        setIsOn( true );
    }, [])

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "inicio" )
        }

        //eslint-disable-next-line
    }, [inView])

    return (
        <div ref={ ref } className={` ${styles.portada} ${ isHover ? styles.caja__hover : styles.caja__nohover} `} id="inicio">
            <div className={ styles.portada__texto }>
                <p>BIENVENIDO!</p>
                <h1>Hola! Me llamo Leonardo Guanuco y soy Desarrollador de JavaScript</h1>
            </div>
            <div className={`${ styles.caja } ${ styles.caja_1 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_2 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_3 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_4 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_5 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_6 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_7 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_8 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_9 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_10 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_11} ${ isOn && styles['caja--on']}`}></div>
        </div>
    )
}
