import React, { useContext } from 'react'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "../../styles/UI/Nax.module.css";
import { UIContext } from '../../context/UI/UIContext';

export const Nav = () => {

    const { campo } = useContext(  UIContext )

    return (
        <div className={ styles.nav }>
            <a className={`${ styles.enlace } ${ campo === "inicio" && styles['background-hover'] }`} href="#inicio">
                <p>I<br/>n<br/>i<br/>c<br/>i<br/>o</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "nosotros" && styles['background-hover'] }`} href="#nosotros">
                <p>S<br/>o<br/>b<br/>r<br/>e<br/>m<br/>í</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "proyectos" && styles['background-hover'] }`} href="#proyectos">
                <p>P<br/>o<br/>y<br/>e<br/>c<br/>t<br/>o<br/>s</p>
            </a>
            <a className={`${ styles.enlace } ${ campo === "contacto" && styles['background-hover'] }`} href="#contacto">
                <p>C<br/>o<br/>n<br/>t<br/>a<br/>c<br/>t<br/>o</p>
            </a>
            <div className={ styles.enlace__redes }>
                <a href="#" className={ styles['icon--redes'] }>
                    <FontAwesomeIcon icon={ faLinkedin }/>
                </a>
                <a href="#" className={ styles['icon--redes'] }>
                    <FontAwesomeIcon icon={ faGithub }/>
                </a>
            </div>
        </div>
    )
}
