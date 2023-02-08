import React, { FC } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";
import { Text } from '../../styled/text/text';
import { Flex } from '../../styled/box/box';

interface Props{
    conocimiento: IConocimientos;
    number: number;
    isHover: boolean;
}

export const ConocimientoFile: FC<Props> = ({ conocimiento: { file, title, type, color }, number, isHover }) => {

    if ( type === "icon" ){
        return (
            <Flex colCenter columnGap={ 10 }>
                <FontAwesomeIcon 
                    className={`${ styles.file__icono } ${ isHover && styles['file__icono--hover'] } `}
                    icon={ file }
                    style={{
                        transitionDelay: `${ (number / 3) + "s" }`
                    }}
                />
            </Flex>
        )
    }

    return (
        <div className={ styles.file }>
            <div 
                className={`${ styles.file__img } ${ isHover && styles['file__img--hover'] } `}
                style={{
                    transitionDelay: `${(number / 3) + "s"}`
                }}    
            >
                <Image 
                    src={ file }
                    alt={ title }
                    fill
                />
            </div>
        </div>
    )
}
