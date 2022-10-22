import React, { FC } from 'react';

import styles from "../../styles/UI/TitleSection.module.css";

interface Props {
    title: string;
}

export const TituloSection: FC<Props> = ({ title }) => {
    return (
        <div className={ styles.tituloSection }>
            <div className={`${ styles.caja } ${ styles.caja_1 }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_2 }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_3 }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_4 }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_5 }`}></div>
            <div className={`${ styles.caja } ${ styles.caja_6 }`}></div>
            <h2>{ title }</h2>
        </div>
    )
}
