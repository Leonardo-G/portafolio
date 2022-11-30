import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/UI/Nax.module.css";

export const Nav = () => {

    const { campo, onHover, outHover } = useContext(  UIContext );
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setIsOn( true )
    }, [])

    return (
        <div 
            className={`${ styles.nav } ${ isOn && styles['nav--on'] }`} 
            onMouseOver={ onHover }
            onMouseOut={ outHover }
        >
            <a 
                className={`${ styles.enlace } ${ campo === "inicio" && styles['background-hover'] }`} 
                href="#inicio"
            >
                <p>I</p>
                <p>n</p>
                <p>i</p>
                <p>c</p>
                <p>i</p>
                <p>o</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "nosotros" && styles['background-hover'] }`} href="#nosotros">
                <p>S</p>
                <p>o</p>
                <p>b</p>
                <p>r</p>
                <p>e </p>
                <p> m</p>
                <p>i</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "proyectos" && styles['background-hover'] }`} href="#proyectos">
                <p>P</p>
                <p>r</p>
                <p>o</p>
                <p>y</p>
                <p>e</p>
                <p>c</p>
                <p>t</p>
                <p>o</p>
                <p>s</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "contacto" && styles['background-hover'] }`} href="#contacto">
                <p>C</p>
                <p>o</p>
                <p>n</p>
                <p>t</p>
                <p>a</p>
                <p>c</p>
                <p>t</p>
                <p>o</p>
            </a>
            <div className={ styles.enlace__redes }>
                <Link href="https://www.linkedin.com/in/leonardo-guanuco-frontend/">
                    <a target="_blank" rel="noopener noreferrer"  className={ styles['icon--redes'] }>
                        <FontAwesomeIcon icon={ faLinkedin }/>
                    </a>
                </Link>
                <Link href="https://github.com/Leonardo-G">
                    <a target="_blank" rel="noopener noreferrer" className={ styles['icon--redes'] }>
                        <FontAwesomeIcon icon={ faGithub }/>
                    </a>
                </Link>
            </div>
        </div>
    )
}
