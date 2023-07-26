import React from 'react'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./IconKnowledge.module.css";

export const IconKnowledge = () => {
  return (
    <div className={ styles.iconKnowledge }>
        <FontAwesomeIcon 
            icon={ faHtml5 }
            className={ styles.iconKnowledge__icon }
        />
    </div>
  )
}
