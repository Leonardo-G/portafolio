import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React, { FC } from 'react'
import { conocimientosDB } from '../../database/conocimientos';
import { IProyectos } from '../../interface/proyectos';

import styles from "../../styles/UI/Proyecto.module.css";

interface Props {
    proyecto: IProyectos
}

export const Proyecto: FC<Props> = ({ proyecto: { img, titulo, conocimientos } }) => {

    return (
        <div className={ styles.proyecto }>
            <div className={ styles.proyecto__img }>
                <Image 
                    src={ img }
                    alt={ titulo }
                    layout="fill"
                    objectFit='contain'
                />
            </div>
            <p>{ titulo }</p>
            {
                conocimientos.map( c => {
                    const conocimiento = conocimientosDB.filter( con => con.title === c )[0];

                    return (
                        <>

                            {
                                conocimiento.type === "icon" ?
                                    <FontAwesomeIcon icon={ conocimiento.file } style={{ color: conocimiento.color, fontSize: "25px" }}/>

                                : 
                                    <div style={{ position: "relative", width: "25px", height: "25px" }}>
                                        <Image 
                                            src={ conocimiento.file }
                                            alt={ conocimiento.title }
                                            layout="fill"
                                            objectFit='contain'
                                        />
                                    </div>

                            }
                        </>
                    )
                })
            }
        </div>
    )
}
