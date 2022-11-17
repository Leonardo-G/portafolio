import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";

interface Props{
    conocimiento: IConocimientos;
    inView: boolean;
    number: number;
    isHover: boolean;
}

export const ConocimientoFile: FC<Props> = ({ conocimiento: { file, title, type, color }, inView, number, isHover }) => {

    if ( type === "icon" ){
        return (
            <div className={ styles.file }>
                <FontAwesomeIcon 
                    className={ styles.file__icono }
                    icon={ file }
                    style={{ color: color }}
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
            <div className={ styles.file__img }>
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
