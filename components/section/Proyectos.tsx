import React from 'react';

import { TituloSection } from '../UI/TituloSection';
import { proyectosDB } from '../../database/proyectos';
import { Proyecto } from '../UI/Proyecto';

import style from "../../styles/section/Proyectos.module.css";

export const Proyectos = () => {
    return (
        <div className={ style.proyectos }>
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
