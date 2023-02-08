import React, { FC, useState } from 'react'

import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ImageContainer } from '../ImageContainer'

import { Box, Flex } from '../../styled/box/box'
import { Position } from '../../styled/position/position'
import { Text, TextLink } from '../../styled/text/text'
import { ICertificate } from '../../interface/certificate'

interface Props {
    certificate: ICertificate;
}

export const Certificate: FC<Props> = ({ certificate: { certificate, education, linkCertificate, imgCertificate, knowledge, technologies, type, year } }) => {

    
    const [isViewCertificate, setisViewCertificate] = useState(false);

    return (
        <>
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
                        >{ certificate }</Text>
                        <Text
                            className="f-auto"
                        >{ education }</Text>
                        <TextLink 
                            href={ linkCertificate }
                            target="_blank"
                            rel="nooponer noreferrer"
                            size={ 14 }
                            className="f-auto"
                        >{ type }</TextLink>
                        <Text 
                            size={ 18 } 
                            weight={ 600 }
                            className="f-auto"
                        >{ year }</Text>
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
                                {
                                    knowledge.map( (k, idx) => (
                                        <li key={ idx }>{ k }</li>
                                    ) )
                                }
                            </ul>
                        </Box>
                        <Box className='f-auto'>
                            <Box padding='20px 0'>
                                <ImageContainer 
                                    height={ 200 }
                                    src={ imgCertificate }
                                />
                            </Box>
                            <Text paddingBt>Tecnologías vista:</Text>
                            <Text weight={ 600 }>
                                {
                                    technologies.map( (t, idx) => technologies.length - 1 === idx ? `${ t }` : `${ t }, ` )
                                }
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}
