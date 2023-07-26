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
import { RowFlex } from '../sobremi/RowFlex/RowFlex';

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
                    <Title sizeXL={ 35 } className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title sizeXL={ 35 } className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title sizeXL={ 35 } className='f-auto' size={ 55 }>SOBRE MI</Title>
                    <Title sizeXL={ 35 } className='f-auto' size={ 55 }>SOBRE MI</Title>
                </Flex>
            </LineHead>
            <Section 
                background='#ff16b9ed' 
                ref={ ref } 
                id="sobremi"
            >
                <Box className='container'>
                    <RowFlex />
                </Box>
            </Section>
        </>
    )
}
