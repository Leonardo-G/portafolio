import React from 'react'
import { Box } from '../../styled/box/box'
import { Section } from '../../styled/globals'
import { certificatesDB } from '../../database/certificates';
import { Title } from '../../styled/text/text';
import { Certificate } from '../UI/Certificate';

export const Certificates = () => {


    return (
        <Section>
            <Title
                className='container' 
                color='#000' 
                size={ 40 }
                sizeXL={ 25 }
            >CERTIFICACIONES</Title>
            <Box border="3px solid #000">
                <Box className='container'>
                    {
                        certificatesDB.map( c => (
                            <Certificate 
                                key={ c.id }
                                certificate={ c }
                            />
                        ) )
                    }
                </Box>
            </Box>
        </Section>
    )
}
