import React, { useContext, useEffect } from 'react';

import { TituloSection } from '../UI/TituloSection';
import { proyectosDB } from '../../database/proyectos';
import { Proyecto } from '../UI/Proyecto';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import style from "../../styles/section/Proyectos.module.css";

export const Proyectos = () => {
    
    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "proyectos" )
        }

        //eslint-disable-next-line
    }, [inView])

    return (
        <div ref={ ref } className={ style.proyectos } id="proyectos">
            <div className={ style.proyectos__fila1 }>
                {
                    proyectosDB.filter(i => i.id <= 7).map( p => {
                        if ( p.id > 7 ) return;

                        return (
                            <Proyecto key={ p.id + p.titulo + "75" } proyecto={ p } />
                        )
                    })
                }
                <a href='https://github.com/Leonardo-G' className={ style.proyectos__enlace }>Y más código en mi GitHub</a>
            </div>
            <div className={ style.proyectos__fila1 }>
                <TituloSection title='PROYECTOS'/>
                {
                    proyectosDB.filter(i => i.id > 7).map( p => {
                        return (
                            <Proyecto key={ p.id } proyecto={ p } />
                        )
                    })
                }
            </div>
        </div>
    )
}
