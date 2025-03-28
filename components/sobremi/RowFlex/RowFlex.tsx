import React from 'react';
import { Knowledge } from '../Knowledge/Knowledge';

import style from './RowFlex.module.css';
import { conocimientosDB } from '../../../database/conocimientos';
import { TextHeading } from '../../text/TextHeading';

export const RowFlex = () => {
  return (
    <div className={style.rowFlex}>
      <div className={style.rowFlex__left}>
        <TextHeading
          title='FrontEnd'
          text='
                        Traduzco diseños en código funcional y estético. 
                        desarrollo sitios web responsivos y dinámicos utilizando las tecnologías requeridas.
                        Optimizo la velocidad de carga y la usabilidad para brindar una experiencia fluida a los usuarios.
                        
                    '
        />
      </div>
      <div className={style.rowFlex__rigth}>
        {conocimientosDB
          .filter((c) => c.stack === 'front')
          .map((c, idx) => (
            <Knowledge key={c.id} idx={idx + 1} {...c} />
          ))}
      </div>
    </div>
  );
};
