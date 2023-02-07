import React, { useContext, useEffect, useState } from 'react'
import { TituloSection } from '../UI/TituloSection';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import { LineHead } from '../../styled/ui';
import { Text, Title } from '../../styled/text/text';
import { Box, Flex } from '../../styled/box/box';
import { Section } from '../../styled/globals';
import { conocimientosDB } from '../../database/conocimientos';
import { ConocimientoFile } from '../UI/ConocimientoFile';
import { ButtonDownload } from '../button/ButtonDownload';

export const Nosotros = () => {

    const { changeCampoNav } = useContext(UIContext);
    const [isHover, setIsHover] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "nosotros" )
        }
        
        //eslint-disable-next-line
    }, [inView])

    return (
        <>
            <LineHead 
                background="#000"
            >
                <Flex center columnGap={ 40 }>
                    <Title className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title className='f-auto' size={ 55 }>SOBRE MI</Title>
                </Flex>
            </LineHead>
            <Section 
                background='#ff16b9ed' 
                ref={ ref } 
                id="nosotros"
            >
                <Box className='container'>
                    <Flex colCenter columnGap={ 40 }>
                        <Box className='container f-auto'>
                            <Text color='#000'>
                                Mi nombre es Leonardo y soy desarrollador de JavaScript, donde me especializo en el desarrollo FrontEnd y/o BackEnd. Llevo dos años practicando y estudiando de manera autodidacta creando proyectos y de manera freelance. Me apasiona el desarrollo de aplicaciones, en la cual distintos usuarios 
                                puedan interactuar con las funcionalidades en la que fui desarrollando
                            </Text>
                            <ButtonDownload text='Descargar C.V'/>
                        </Box>
                        <Box className="f-auto">
                            <Flex wrap gap={ 20 }>
                                {
                                    conocimientosDB.map( (c, idx) => (
                                        <ConocimientoFile
                                            conocimiento={ c } 
                                            key={ c.id } 
                                            number={ idx }
                                            isHover={ isHover }
                                        />
                                    ))
                                }
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Section>
        </>
    )
}
