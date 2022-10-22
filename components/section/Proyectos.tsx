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
                    proyectosDB.map( p => (
                        <Proyecto key={ p.id } proyecto={ p } />
                    ))
                }
            </div>
            <TituloSection title='PROYECTOS'/>
        </div>
    )
}
