import React, { FC } from 'react';
import { IconKnowledge } from '../IconKnowledge/IconKnowledge';

import styles from "./Knowledge.module.css";

interface Props {
  
}

export const Knowledge: FC<Props> = () => {
  return (
    <div className={ styles.kwowledge }>
      <div className={ styles.kwowledge__icon }>
        <IconKnowledge />
      </div>
      <p className='f-size-20 roboto-mono text-center pb-5 pt-4'>HTML5</p>
    </div>
  )
}
