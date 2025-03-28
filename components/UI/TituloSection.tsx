'use client';

import React, { FC, useContext } from 'react';
import { UIContext } from '../../context/UI/UIContext';

import styles from '../../styles/UI/TitleSection.module.css';

interface Props {
  title: string;
}

export const TituloSection: FC<Props> = ({ title }) => {
  const { isHover } = useContext(UIContext);

  return (
    <div
      className={` ${styles.tituloSection} ${isHover ? styles.caja__hover : styles.caja__nohover} `}
    >
      <div className={`${styles.caja} ${styles.caja_1}`}></div>
      <div className={`${styles.caja} ${styles.caja_2}`}></div>
      <div className={`${styles.caja} ${styles.caja_3}`}></div>
      <div className={`${styles.caja} ${styles.caja_4}`}></div>
      <div className={`${styles.caja} ${styles.caja_5}`}></div>
      <div className={`${styles.caja} ${styles.caja_6}`}></div>
      <h2>{title}</h2>
    </div>
  );
};
