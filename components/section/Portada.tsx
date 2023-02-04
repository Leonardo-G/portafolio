import React, { useContext, useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/section/Portada.module.css";
import { BoxWhite } from '../../styled/ui';

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
            <BoxWhite 
                height={ 156 }
                width="10%"
                left="10%"
            ></BoxWhite>
            <BoxWhite 
                height={ 78 }
                width="12.5%"
                right="40%"
            ></BoxWhite>
            <BoxWhite 
                height={ 78 }
                width="36%"
                right="5%"
                top='9%'
            ></BoxWhite>
            <BoxWhite 
                height={ 110 }
                width="9%"
                top="43%"
                left='5%'
            ></BoxWhite>
            <BoxWhite 
                height={ 125 }
                width="10%"
                top="32%"
                left='22%'
            ></BoxWhite>
            <BoxWhite 
                height={ 82 }
                width="14%"
                top="60%"
                left='25%'
            ></BoxWhite>
            <BoxWhite 
                height={ 187 }
                width="18%"
                top="35%"
                left='42%'
            ></BoxWhite>
            <div className={`${ styles.caja } ${ styles.caja_8 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_9 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_10 } ${ isOn && styles['caja--on'] }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_11} ${ isOn && styles['caja--on']}`}></div>
        </div>
    )
}
