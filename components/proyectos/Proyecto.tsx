import React, { FC } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ImageContainer } from '../ImageContainer'
import { IProyectos } from '../../interface/proyectos'

import { Box, Flex } from '../../styled/box/box'
import { GridChildren } from '../../styled/grid/grid'
import { Hover } from '../../styled/hover/hover'
import { Position } from '../../styled/position/position'
import { Title } from '../../styled/text/text'

interface Props {
    proyecto: IProyectos;
    title?: boolean;
}

export const Proyecto: FC<Props> = ({ proyecto: { img, columns, repositorio, url, titulo }, title }) => {
    return (
        <GridChildren column={ columns } className="relative">
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
                                <Title color='#000'>{ titulo }</Title>
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
                            <Link href={ repositorio ? repositorio : "" }>
                                <FontAwesomeIcon 
                                    icon={ faGithub }
                                    color="#000"   
                                    size='2xl'
                                />
                            </Link>
                            {
                                url &&
                                <Link href={ url }>
                                    <FontAwesomeIcon 
                                        icon={ faGlobe }
                                        color="#000"   
                                        size='2xl' 
                                    />
                                </Link>
                            }
                        </Flex>
                    </Box>
                </Position>
            </Hover>
        </GridChildren>
    )
}
