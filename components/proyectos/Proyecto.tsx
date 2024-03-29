import React, { FC } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Tecnologia } from '../button/Tecnologia'
import { ImageContainer } from '../ImageContainer'
import { IProyectos, ITecnologia } from '../../interface/proyectos'

import { Box, Flex } from '../../styled/box/box'
import { GridChildren } from '../../styled/grid/grid'
import { Hover } from '../../styled/hover/hover'
import { Position } from '../../styled/position/position'
import { Title } from '../../styled/text/text'
import { IconSize } from '../../styled/icon/icon'
import { compareArrays } from '../../utils/compareArrays'

interface Props {
    proyecto: IProyectos;
    title?: boolean;
    technologies: ITecnologia[];
}

export const Proyecto: FC<Props> = ({ proyecto: { img, columns, repositorio, url, titulo, conocimientos }, title, technologies }) => {

    return (
        <GridChildren 
            column={ columns } 
            className="relative"
            opacity={ technologies.length > 0 && !compareArrays( conocimientos, technologies ) ? "0.2" : undefined}
        >
            <Hover>
                {
                    title 
                    ?
                        <Box 
                            height='100%'
                            width='100%' 
                            background='#ff16b9ed' 
                            radius='10px'
                            padding='20px'
                        >
                            <Flex center colCenter>
                                <Title 
                                    color='#000'
                                    sizeXM={ 12 }    
                                >{ titulo }</Title>
                            </Flex>
                        </Box>
                    :
                        <ImageContainer 
                            src={ img }
                            cover
                            radius='10px'
                        />
                }
                <Position transform='translate( -50%, -50% )' top='50%' left='50%'>
                    <Box
                        radius='10px' 
                        background='rgba(202, 202, 2, 0.705)' 
                        padding='10px'
                        className='none visibility'
                    >
                        <Flex columnGap={ 10 }>
                            <Link 
                                href={ repositorio ? repositorio : "" }
                                target='_blank'
                                rel="noopener noreferrer"    
                            >
                                <IconSize size={ 30 } sizeXM={ 20 }>
                                    <FontAwesomeIcon 
                                        icon={ faGithub }
                                        color="#000"  
                                    />
                                </IconSize>
                            </Link>
                            {
                                url &&
                                <Link 
                                    href={ url }
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <IconSize size={ 30 } sizeXM={ 20 }>
                                        <FontAwesomeIcon 
                                            icon={ faGlobe }
                                            color="#000"   
                                        />
                                    </IconSize>
                                </Link>
                            }
                        </Flex>
                    </Box>
                </Position>
                <Position 
                    bottom='2%' 
                    left='2%'
                    className='translate'
                >
                    <Flex wrap gap={ 5 }>
                        {
                            conocimientos.map( c => (
                                <Tecnologia 
                                    key={ c }
                                    title={ c }
                                    technologies={ technologies }
                                />
                            ))
                        }
                    </Flex>
                </Position>
            </Hover>
        </GridChildren>
    )
}
