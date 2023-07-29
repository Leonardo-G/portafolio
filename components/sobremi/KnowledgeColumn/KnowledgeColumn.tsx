import React, { FC, ReactNode } from 'react'
import { conocimientosDB } from '../../../database/conocimientos';
import { Knowledge } from '../Knowledge/Knowledge';

import styles from './KnowledgeColumn.module.css';

interface Props {
    children: ReactNode;
    stack: 'front' | 'back' | 'other' | 'basic';
}

export const KnowledgeColumn: FC<Props> = ({ children, stack }) => {
  return (
    <div className={ styles.flexColumn }>
        { children }
        <div className={ styles.flexColumn__icons }>
          {
            conocimientosDB.filter( c => c.stack === stack).map(( c, idx )=> (
              <Knowledge 
                key={ c.id }
                idx={ idx }
                { ...c }
              />
            ))
          }
        </div>
    </div>
  )
}
