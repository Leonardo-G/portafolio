import React, { FC } from 'react';
import { IconKnowledge } from '../IconKnowledge/IconKnowledge';

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ITecnologia } from '../../../interface/proyectos';

import styles from "./Knowledge.module.css";

interface Props {
  id: number;
  idx: number;
  type: "icon" | "img";
  file: string | IconDefinition;
  title: ITecnologia;
  color: string;
  stack: 'front' | 'back' | 'basic' | 'other'
}

export const Knowledge: FC<Props> = ({ title, type, file, idx }) => {
  const box = "div" + idx.toString();

  return (
    <div className={`${styles.kwowledge} ${styles[box]}`}>
      <div className={ styles.kwowledge__icon }>
        <IconKnowledge 
          file={ file }
          title={ title }
          type={ type }
        />
      </div>
      <p className='f-size-16 roboto-mono text-center pb-5 pt-4'>{ title }</p>
    </div>
  )
}
