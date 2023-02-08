import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react'
import { Box, Flex } from '../../styled/box/box'
import { Section } from '../../styled/globals'
import { Position } from '../../styled/position/position';
import { Text, TextLink, Title } from '../../styled/text/text';
import { ImageContainer } from '../ImageContainer';

export const Certificates = () => {

    const [isViewCertificate, setisViewCertificate] = useState(false);

    return (
        <Section>
            <Title 
                className='container' 
                color='#000' 
                size={ 40 }
            >CERTIFICACIONES</Title>
            <Box border="3px solid #000">
                <Box className='container'>
                    <Box ovHidden transition>
                        <Box 
                            padding="20px" 
                            borderY='2px solid #000'
                            borderTopNone   
                            className='relative'
                            zIndex="2"
                            background="#fff"
                        >
                            <Position
                                bottom='0'
                                left="0"
                                width='100%'
                            >
                                <Box 
                                    width='100%'
                                    height='2px'
                                    background='#000'
                                ></Box>
                            </Position>
                            <Flex colCenter>
                                <Text 
                                    weight={ 700 } 
                                    size={ 25 }
                                    className="f-2"
                                >Desarrollador Full Stack</Text>
                                <Text
                                    className="f-auto"
                                >CoderHouse</Text>
                                <TextLink 
                                    href="https://www.coderhouse.com/certificados/62e9474ad9359a0019a78294"
                                    target="_blank"
                                    rel="nooponer noreferrer"
                                    size={ 14 }
                                    className="f-auto"
                                >Certificado</TextLink>
                                <Text 
                                    size={ 18 } 
                                    weight={ 600 }
                                    className="f-auto"
                                >2021-2022</Text>
                                <Box>
                                    <FontAwesomeIcon 
                                        icon={ faAdd } 
                                        size="4x" 
                                        onClick={ () => setisViewCertificate( !isViewCertificate ) }
                                        style={{ 
                                            cursor: "pointer",
                                            transform: isViewCertificate ? "rotate(45deg)" : "rotate(0)",
                                            transition: ".5s all ease"
                                        }}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box 
                            background='yellow' 
                            padding={ isViewCertificate ? "50px" : "0px 50px" }
                            borderY='2px solid #000'
                            transition
                            height={ isViewCertificate ? "500px" : "0px" }
                        >
                            <Flex>
                                <Box className='f-auto'>
                                    <Text paddingBt>Lo que se aprendió</Text>
                                    <ul>
                                        <li>Crear un sitio web sumergiéndote en las mejores prácticas del diseño web responsive</li>
                                        <li>Programación con Javascript</li>
                                        <li>React JS, que te permitirá realizar sitios más complejos, dinámicos y escalables</li>
                                        <li>Aplicaciones modernas con Node.js y MongoDB</li>
                                        <li>Bases de datos SQL y NoSQL</li>
                                        <li>Material UI</li>
                                        <li>Introducción a Next UI</li>
                                        <li>Y más...</li>
                                    </ul>
                                </Box>
                                <Box className='f-auto'>
                                    <Box padding='20px 0'>
                                        <ImageContainer 
                                            height={ 200 }
                                            src="/diplomas/full-coder.png"
                                        />
                                    </Box>
                                    <Text paddingBt>Tecnologías vista:</Text>
                                    <Text weight={ 600 }>HTML5, CSS3, SASS, JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose, MySQL con Sequelize, JWT, Sockets, NPM, GIT, GITHUB</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
}
