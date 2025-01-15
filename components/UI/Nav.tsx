"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { NavBar, NavResponsive } from '../../styled/ui';
import { Position } from '../../styled/position/position';
import { Box, Flex } from '../../styled/box/box';
import { Text } from '../../styled/text/text';
import { IconSize } from '../../styled/icon/icon';

export const Nav = () => {

    const [isUp, setIsUp] = useState(true);
    const [activeNavBar, setActiveNavBar] = useState(false);

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
    }, []);

    
    return (
        <>
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
                    <Flex className='container' colCenter justifyContent='space-between'>
                        <Text width='100px' family='Shadows Into Light' lh='0.9' size={ 24 }>Leonardo Guanuco</Text>
                        <Box dNoneXL>
                            <Flex columnGap={ 30 }>
                                <a style={{ color: "#000" }} href="#inicio">Inicio</a>
                                <a style={{ color: "#000" }} href="#sobremi">Sobre mí</a>
                                <a style={{ color: "#000" }} href="#proyectos">Proyectos</a>
                                <a style={{ color: "#000" }} href="#contacto">Contacto</a>
                            </Flex>
                        </Box>
                        <Box dNoneXL>
                            <Link href="https://www.linkedin.com/in/leonardo-guanuco-javascript-typescript/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                    icon={ faLinkedin }
                                    color="#000"
                                    size='2x'
                                    style={{ marginRight: "20px" }}
                                />
                            </Link>
                            <Link href="https://github.com/Leonardo-G" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                    icon={ faGithub }
                                    color="#000"    
                                    size='2x'
                                />
                            </Link>
                        </Box>
                        <NavBar onClick={ () => setActiveNavBar( true) }>
                            <FontAwesomeIcon 
                                icon={ faBars }
                                size="2x"
                            />
                        </NavBar>
                    </Flex>
                </Box>
            </Position>
            <NavResponsive 
                active={ activeNavBar }
            >
                <Position fixed top='5%' left='80%'>
                    <FontAwesomeIcon 
                        icon={ faXmark } 
                        size="3x"
                        style={{ cursor: "pointer" }}   
                        onClick={ () => setActiveNavBar( false ) } 
                    />
                </Position>
                <a 
                    style={{ color: "#000" }} 
                    href="#inicio"
                    onClick={ () => setActiveNavBar( false ) } 
                >Inicio</a>
                <a 
                    style={{ color: "#000" }} 
                    href="#sobremi"
                    onClick={ () => setActiveNavBar( false ) } 
                >Sobre mí</a>
                <a 
                    style={{ color: "#000" }} 
                    href="#proyectos"
                    onClick={ () => setActiveNavBar( false ) } 
                >Proyectos</a>
                <a 
                    style={{ color: "#000" }} 
                    href="#contacto"
                    onClick={ () => setActiveNavBar( false ) } 
                >Contacto</a>
                <Box>
                    <Link 
                        href="https://www.linkedin.com/in/leonardo-guanuco-frontend/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={ () => setActiveNavBar( false ) }     
                    >
                        <FontAwesomeIcon 
                            icon={ faLinkedin }
                            color="#000"
                            size='2x'
                            style={{ marginRight: "20px" }}
                        />
                    </Link>
                    <Link 
                        href="https://github.com/Leonardo-G" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={ () => setActiveNavBar( false ) } 
                    >
                        <FontAwesomeIcon 
                            icon={ faGithub }
                            color="#000"    
                            size='2x'
                        />
                    </Link>
                </Box>
            </NavResponsive>
        </>
    )
}
