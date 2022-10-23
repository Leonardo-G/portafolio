import React, { useContext, useEffect } from 'react';

import { TituloSection } from '../UI/TituloSection';
import { proyectosDB } from '../../database/proyectos';
import { Proyecto } from '../UI/Proyecto';

import style from "../../styles/section/Proyectos.module.css";
import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

export const Proyectos = () => {
    
    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        rootMargin: "50px 0px 0px 0px"
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "proyectos" )
        }
    }, [inView])

    return (
        <div ref={ ref } className={ style.proyectos } id="proyectos">
            <div className={ style.proyectos__fila1 }>
                {
                    proyectosDB.map( p => {
                        if ( p.id > 5 ) return;

                        return (
                            <Proyecto key={ p.id } proyecto={ p } />
                        )
                    })
                }
                <p>Y más código en mi GitHub</p>
            </div>
            <div className={ style.proyectos__fila1 }>
                <TituloSection title='PROYECTOS'/>
                {
                    proyectosDB.map( p => {
                        if ( p.id <= 5 ) return (<></>);
                        
                        return (
                            <Proyecto key={ p.id } proyecto={ p } />
                        )
                    })
                }
            </div>
        </div>
    )
}
