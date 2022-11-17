import React, { FC } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { conocimientosDB } from '../../database/conocimientos';
import { IProyectos } from '../../interface/proyectos';

import styles from "../../styles/UI/Proyecto.module.css";

interface Props {
    proyecto: IProyectos
}

export const Proyecto: FC<Props> = ({ proyecto: { img, titulo, conocimientos, heigth } }) => {

    return (
        <div className={ styles.proyecto }>
            <div className={ styles.proyecto__img } style={{ height: heigth }}>
                <Image 
                    src={ img }
                    alt={ titulo }
                    layout="fill"
                    objectFit='contain'
                />
            </div>
            <div className={ styles.proyecto__texto }>

                <p className=''>{ titulo }</p>
                <div>
                    {
                        conocimientos.map( c => {
                            const conocimiento = conocimientosDB.filter( con => con.title === c )[0];

                            return (
                                <>

                                    {
                                        conocimiento.type === "icon" ?
                                            <FontAwesomeIcon key={ conocimiento.id + titulo } title={ conocimiento.title } className={ styles['proyecto__texto--iconos'] } icon={ conocimiento.file } style={{ color: conocimiento.color, fontSize: "25px" }}/>

                                        : 
                                            <div key={ conocimiento.id + titulo } title={ conocimiento.title } className={ styles['proyecto__texto--iconos'] } style={{ position: "relative", width: "25px", height: "25px", display: "inline-block" }}>
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
            </div>
        </div>
    )
}
