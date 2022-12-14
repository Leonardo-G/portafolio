import React, { FC } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";

interface Props{
    conocimiento: IConocimientos;
    number: number;
    isHover: boolean;
}

export const ConocimientoFile: FC<Props> = ({ conocimiento: { file, title, type, color }, number, isHover }) => {

    if ( type === "icon" ){
        return (
            <div className={ styles.file }>
                <FontAwesomeIcon 
                    className={`${ styles.file__icono } ${ isHover && styles['file__icono--hover'] } `}
                    icon={ file }
                    style={{ 
                        color,
                        transitionDelay: `${ (number / 3) + "s" }`
                    }}
                />
                <p 
                    className={`${ styles.file__titulo } ${ isHover && styles['file__titulo--hover'] } `}
                    style={{ 
                        color,
                        transitionDelay: `${(number / 3) + "s"}`
                    }}
                >{ title }</p>
            </div>
        )
    }

    return (
        <div className={ styles.file }>
            <div 
                className={`${ styles.file__img } ${ isHover && styles['file__img--hover'] } `}
                style={{
                    transitionDelay: `${(number / 3) + "s"}`
                }}    
            >
                <Image 
                    src={ file }
                    alt={ title }
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <p 
                className={`${ styles.file__titulo } ${ isHover && styles['file__titulo--hover'] }`}
                style={{ 
                    color, 
                    transitionDelay: `${(number / 3) + "s"}`
                }}
            >{ title }</p>
        </div>
    )
}
