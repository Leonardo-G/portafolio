import React, { FC } from 'react'
import { IconDefinition, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./IconKnowledge.module.css";
import Image from 'next/image';

interface Props {
  file: string | IconDefinition;
  type: 'img' | 'icon';
  title: string;
}

export const IconKnowledge: FC<Props> = ({ file, type, title }) => {

  if ( type === 'img' ) {
    return (
      <div className={ styles.iconKnowledge }>
        <Image 
          src={ file as string }
          fill
          alt={ title }
        />
      </div>
    )
  }

  return (
    <div className={ styles.iconKnowledge }>
        <FontAwesomeIcon 
            icon={ file as IconDefinition }
            className={ styles.iconKnowledge__icon }
        />
    </div>
  )
}
