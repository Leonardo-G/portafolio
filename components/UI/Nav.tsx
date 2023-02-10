import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/UI/Nax.module.css";
import { Position } from '../../styled/position/position';
import { Box, Flex } from '../../styled/box/box';
import { Text } from '../../styled/text/text';

export const Nav = () => {

    const { campo, onHover, outHover } = useContext(  UIContext );
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setIsOn( true )
    }, [])

    return (
        <Position
            top="0%"
            left='0%'
            width='100%'
            fixed
            zIndex={ 99 }
        >
            <Box background='#fff' padding='20px'>
                <Flex className='container' colCenter justifyContent='space-around'>
                    <Text width='100px' family='Shadows Into Light' lh='0.9' size={ 24 }>Leonardo Guanuco</Text>
                    <Flex columnGap={ 30 }>
                        <a style={{ color: "#000" }} href="">Inicio</a>
                        <a style={{ color: "#000" }} href="">Sobre mí</a>
                        <a style={{ color: "#000" }} href="">Proyectos</a>
                        <a style={{ color: "#000" }} href="">Contacto</a>
                    </Flex>
                    <div>
                        <Link href="https://www.linkedin.com/in/leonardo-guanuco-frontend/" target="_blank" rel="noopener noreferrer"  className={ styles['icon--redes'] }>
                                <FontAwesomeIcon 
                                    icon={ faLinkedin }
                                    color="#000"
                                />
                        </Link>
                        <Link href="https://github.com/Leonardo-G" target="_blank" rel="noopener noreferrer" className={ styles['icon--redes'] }>
                            <FontAwesomeIcon 
                                icon={ faGithub }
                                color="#000"    
                            />
                        </Link>
                    </div>
                </Flex>
            </Box>
        </Position>
    )
}
