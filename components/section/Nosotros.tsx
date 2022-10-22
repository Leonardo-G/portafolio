import React from 'react'
import { TituloSection } from '../UI/TituloSection';

import styles from "../../styles/section/Nosotros.module.css";

export const Nosotros = () => {
    return (
        <section className={ styles.nosotros }>
            <div className={ styles.nosotros__texto }>
                <p>Soy desarrollador manejando el lenguaje de JavaScript. Me especializo en la parte del front - end, aunque tambien tengo proyectos prácticos y conocimientos del lado del back - end. Me gusta construír aplicaciones complejas, creando interfaces e imaginar interacciones útiles centrado en el usuario</p>
            </div>
            <TituloSection title='SOBRE MÍ' />
        </section>
    )
}
