import React, { useContext, useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { UIContext } from '../../context/UI/UIContext';

import { Box, Flex } from '../../styled/box/box';
import { Section } from '../../styled/globals';
import { Text, Title } from '../../styled/text/text';
import { LineHead } from '../../styled/ui';
import { conocimientosDB } from '../../database/conocimientos';
import { Option } from '../UI/Option';
import { Select } from '../../styled/select/select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Position } from '../../styled/position/position';
import { ProyectoContainer } from '../proyectos/ProyectoContainer';
import { ITecnologia } from '../../interface/proyectos';


export const Proyectos = () => {
    
    const [options, setOptions] = useState([] as ITecnologia[])
    const [isSelect, setIsSelect] = useState(false);
    const { changeCampoNav } = useContext(UIContext)

    const { ref, inView } = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "proyectos" );
        }

        //eslint-disable-next-line
    }, [inView])

    const handleChangeOption = ( tecnology: ITecnologia ) => {

        if ( options.some( o => o === tecnology ) ) {
            setOptions( options.filter( option => option !== tecnology ) );
            return;
        }

        setOptions([
            ...options,
            tecnology
        ]);
    }

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
                <Box className='container'>
                    <Select>
                        <Flex
                            justifyContent='space-between'
                            colCenter
                            columnGap={ 20 }
                            onClick={ () => setIsSelect( !isSelect ) }
                        >
                            <Text>Tecnologías</Text>
                            <FontAwesomeIcon 
                                icon={ faChevronUp }
                                style={{ 
                                    transform: isSelect ? "rotate(180deg)" : "rotate(0)",
                                    transition: ".3s all ease"
                                }}    
                            />
                        </Flex>
                        {
                            isSelect &&
                            <Position top='120%' left='0' width='100%'>
                                <Box 
                                    background='#fff' 
                                    padding='10px 0 10px 0' 
                                    height='200px' 
                                    overflowY
                                >
                                    <Box padding='0 0 0 10px'>
                                        <Text>Ver Todos</Text>
                                    </Box>
                                    {
                                        conocimientosDB.map( c => (
                                            <Option 
                                                key={ c.id }
                                                option={ c.title }
                                                color={ c.color }
                                                select={ options.some( o => o === c.title ) }
                                                handleChangeOption={ handleChangeOption }
                                            />
                                        ))
                                    }
                                </Box>
                            </Position>
                        }
                    </Select>
                </Box>
                <ProyectoContainer />
            </Section>
        </>
    )
}
