import React, { FC } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";

interface Props{
    conocimiento: IConocimientos
}

export const ConocimientoFile: FC<Props> = ({ conocimiento: { file, title, type, color } }) => {

    if ( type === "icon" ){
        return (
            <div className={ styles.file }>
                <FontAwesomeIcon 
                    className={ styles.file__icono }
                    icon={ file }
                    style={{ color: color }}
                />
                <p 
                    className={ styles.file__titulo }
                    style={{ color }}
                >{ title }</p>
            </div>
        )
    }

    return (
        <div className={ styles.file }>
            <div className={ styles.file__img }>
                <Image 
                    src={ file }
                    alt={ title }
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <p 
                className={ styles.file__titulo }
                style={{ color }}
            >{ title }</p>
        </div>
    )
}