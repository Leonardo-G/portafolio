import React, { useContext, useEffect } from 'react'

import { TituloSection } from '../UI/TituloSection'

import styles from "../../styles/section/Contacto.module.css";
import { UIContext } from '../../context/UI/UIContext';
import { useInView } from 'react-intersection-observer';

export const Contacto = () => {

    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "contacto" )
        }
    }, [inView])

    return (
        <section ref={ ref } className={ styles.contacto } id="contacto">
            <div className={ styles.contacto__titulo }>
                <TituloSection title='Contacto'/>
            </div>
            <div className={ styles.contacto__campos }>
                <input className={ styles['contacto__campos--input'] } type="text" placeholder='Nombre...'/>
                <input className={ styles['contacto__campos--input'] } type="text" placeholder='Correo...'/>
                <textarea className={ styles['contacto__campos--textarea'] } placeholder='Mensaje...'/>
            </div>
        </section>
    )
}
