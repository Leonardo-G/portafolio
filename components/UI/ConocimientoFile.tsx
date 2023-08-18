import React, { FC } from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IConocimientos } from '../../interface/conocimientos'

import styles from "../../styles/UI/ConocimientoFile.module.css";
import { Flex } from '../../styled/box/box';
import { IconImage, IconSize } from '../../styled/icon/icon';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

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
                    sizeXM={ 40 }
                >
                    <FontAwesomeIcon 
                        icon={ file as IconDefinition}
                        style={{
                            transitionDelay: `${ (number / 3) + "s" }`
                        }}
                        title={ title }
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
                sizeXM={ 40 }
                style={{
                    transitionDelay: `${(number / 3) + "s"}`
                }}    
            >
                <Image 
                    src={ file }
                    alt={ title }
                    title={ title }
                    fill
                />
            </IconImage>
        </div>
    )
}
