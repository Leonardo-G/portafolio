import React, { useContext, useEffect } from 'react'
import { TituloSection } from '../UI/TituloSection';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/section/Nosotros.module.css";

export const Nosotros = () => {

    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "nosotros" )
        }
        
        //eslint-disable-next-line
    }, [inView])

    return (
        <section ref={ ref } className={ styles.nosotros } id="nosotros">
            <div className={ styles.nosotros__texto }>
                <p>Soy desarrollador manejando el lenguaje de JavaScript. Me especializo en la parte del front - end, aunque tambien tengo proyectos prácticos y conocimientos del lado del back - end. Me gusta construír aplicaciones complejas, creando interfaces e imaginar interacciones útiles centrado en el usuario</p>
            </div>
            <TituloSection title='SOBRE MÍ' />
        </section>
    )
}
