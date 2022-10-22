import React from 'react';
import Image from 'next/image';

import styles from "../../styles/portada/Portada.module.css";

export const Portada = () => {
    return (
        <div className={ styles.portada }>
            <div className={ styles.caja_1 }></div>
            <div className={ styles.caja_2 }></div>
            <div className={ styles.caja_3 }></div>
            <div className={ styles.caja_4 }></div>
            <div className={ styles.caja_5 }></div>
            <div className={ styles.caja_6 }></div>
            <div className={ styles.caja_7 }></div>
            <div className={ styles.caja_8 }></div>
            <div className={ styles.caja_9 }></div>
            <div className={ styles.caja_10 }></div>
            <div className={ styles.caja_11 }></div>
            <div className={ styles.imgContainer }>
                <Image
                    src="/static/portfolio.jpg"
                    alt='Image Portafolio'
                    layout='fill'
                    objectFit='contain'
                />  
            </div>
        </div>
    )
}
