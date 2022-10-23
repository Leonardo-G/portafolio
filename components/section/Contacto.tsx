import React from 'react'

import { TituloSection } from '../UI/TituloSection'

import styles from "../../styles/section/Contacto.module.css";

export const Contacto = () => {
    return (
        <section className={ styles.contacto }>
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
