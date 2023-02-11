import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "../../styles/UI/Nax.module.css";
import { Position } from '../../styled/position/position';
import { Box, Flex } from '../../styled/box/box';
import { Text } from '../../styled/text/text';

export const Nav = () => {

    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
        let principal = window.pageYOffset
        const handleScroll = () => {
            if ( principal >= window.pageYOffset ) {
                setIsUp( true );
                principal = window.pageYOffset;
            } else {
                principal = window.pageYOffset;

                if ( setIsUp ) {
                    setIsUp( false );
                }
            }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
    return (
        <Position
            top="0%"
            left='0%'
            width='100%'
            fixed
            zIndex={ 99 }
            style={{
                transform: isUp ? "translateY(0%)" : "translateY(-100%)",
                transition: ".5s all ease",
                boxShadow: "0px 0px 20px rgb(0 0 0 / 25%)"
            }}
        >
            <Box background='#fff' padding='20px'>
                <Flex className='container' colCenter justifyContent='space-around'>
                    <Text width='100px' family='Shadows Into Light' lh='0.9' size={ 24 }>Leonardo Guanuco</Text>
                    <Flex columnGap={ 30 }>
                        <a style={{ color: "#000" }} href="#inicio">Inicio</a>
                        <a style={{ color: "#000" }} href="#sobremi">Sobre mí</a>
                        <a style={{ color: "#000" }} href="#proyectos">Proyectos</a>
                        <a style={{ color: "#000" }} href="#contacto">Contacto</a>
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
