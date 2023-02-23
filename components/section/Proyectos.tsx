import React, { useContext, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { UIContext } from '../../context/UI/UIContext';
import { proyectosDB } from '../../database/proyectos';

import { Box, Flex } from '../../styled/box/box';
import { Section } from '../../styled/globals';
import { Grid } from '../../styled/grid/grid';
import { Title } from '../../styled/text/text';
import { LineHead } from '../../styled/ui';
import { Proyecto } from '../proyectos/Proyecto';


export const Proyectos = () => {
    
    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "proyectos" )
        }

        //eslint-disable-next-line
    }, [inView])

    return (
        <>
            <Section 
                ref={ ref } 
                id="proyectos"
                background='#000'
                ovHidden
            >
                <Box rotate='3deg'>
                    <LineHead background='yellow'>
                        <Flex columnGap={ 50 }>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#fff'>PROYECTOS</Title>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#000'>PROYECTOS</Title>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#fff'>PROYECTOS</Title>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#000'>PROYECTOS</Title>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#fff'>PROYECTOS</Title>
                            <Title className='f-auto' size={ 55 } sizeXL={ 35 } color='#000'>PROYECTOS</Title>
                        </Flex>
                    </LineHead>
                </Box>
                <Box padding='20px 0'>
                    <Title 
                        className='container'
                        size={ 40 }
                    >Front End</Title>
                </Box>
                <Grid 
                    className='container' 
                    rows='600px 300px 500px 400px' 
                    rowsXM='350px 250px 350px 250px'    
                    gap={ 50 }
                    gapXM={ 10 }
                >
                    {
                        proyectosDB.filter( p => p.structure === "front").map( p => (
                            <Proyecto
                                key={ p.id }
                                proyecto={ p }
                            />
                        ) )
                    }
                </Grid>
                <Box padding='20px 0'>
                    <Title 
                        className='container'
                        size={ 40 }
                    >Back End</Title>
                </Box>
                <Grid 
                    className='container' 
                    rows='300px 300px' 
                    rowsXM='300px 300px'
                    gap={ 50 }
                    gapXM={ 10 }
                >
                    {
                        proyectosDB.filter( p => p.structure === "back").map( p => (
                            <Proyecto
                                key={ p.id }
                                proyecto={ p }
                                title
                            />
                        ) )
                    }
                </Grid>
            </Section>
        </>
    )
}
