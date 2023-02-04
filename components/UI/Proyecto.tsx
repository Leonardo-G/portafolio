import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { conocimientosDB } from '../../database/conocimientos';
import { IProyectos } from '../../interface/proyectos';

import styles from "../../styles/UI/Proyecto.module.css";

interface Props {
    proyecto: IProyectos
}

export const Proyecto: FC<Props> = ({ proyecto: { img, titulo, conocimientos, heigth, repositorio, url } }) => {

    return (
        <div className={ styles.proyecto }>
            <div className={ styles.proyecto__img } style={{ height: heigth }}>
                <div className={ styles.proyecto__buttons }>
                    {
                        repositorio &&
                        <Link 
                            href={ repositorio } 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={ styles['proyecto__buttons--href'] }
                        >
                            <FontAwesomeIcon icon={ faGithub }/>
                        </Link>
                    }
                    {
                        url &&
                        <Link 
                            href={ url }
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={ styles['proyecto__buttons--href'] }
                        >
                            <FontAwesomeIcon icon={ faGlobe }/>
                        </Link>
                    }
                </div>
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
                                            <div key={ conocimiento.id + titulo } title={ conocimiento.title } className={ styles['proyecto__texto--iconos'] }>
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
