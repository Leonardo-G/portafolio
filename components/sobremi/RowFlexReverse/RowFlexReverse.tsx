import React from 'react';
import { Knowledge } from '../Knowledge/Knowledge';

import { conocimientosDB } from '../../../database/conocimientos';
import style from './RowFlexReverse.module.css';
import { TextHeading } from '../../text/TextHeading';

export const RowFlexReverse = () => {
  return (
    <div className={style.rowFlex}>
      <div className={style.rowFlex__left}>
        <TextHeading
          title='BackEnd'
          text=' Desarrollo de bases de datos eficientes y APIs 
                    potentes para asegurar la funcionalidad y rendimiento del lado del servidor.
                    PostgreSQL y MySQL, integrandolo con Sequelize.'
        />
      </div>
      <div className={style.rowFlex__rigth}>
        {conocimientosDB
          .filter((c) => c.stack === 'back')
          .map((c, idx) => (
            <Knowledge key={c.id} idx={idx + 1} {...c} />
          ))}
      </div>
    </div>
  );
};
