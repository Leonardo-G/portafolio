import React, { FC } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";
import { Flex } from '../../styled/box/box';
import { IconImage, IconSize } from '../../styled/icon/icon';

interface Props{
    conocimiento: IConocimientos;
    number: number;
    isHover: boolean;
}

export const ConocimientoFile: FC<Props> = ({ conocimiento: { file, title, type, color }, number, isHover }) => {

    if ( type === "icon" ){
        return (
            <Flex colCenter columnGap={ 10 }>
                <IconSize 
                    size={ 100 }
                    sizeXL={ 60 }
                >
                    <FontAwesomeIcon 
                        icon={ file }
                        style={{
                            transitionDelay: `${ (number / 3) + "s" }`
                        }}
                    />
                </IconSize>
            </Flex>
        )
    }

    return (
        <div className={ styles.file }>
            <IconImage 
                size={ 100 }
                sizeXL={ 60 }
                style={{
                    transitionDelay: `${(number / 3) + "s"}`
                }}    
            >
                <Image 
                    src={ file }
                    alt={ title }
                    fill
                />
            </IconImage>
        </div>
    )
}
