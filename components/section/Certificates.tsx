"use client"

import React, { useState } from 'react'

import { certificatesDB } from '../../database/certificates';
import { Certificate } from '../UI/Certificate';

import { Box } from '../../styled/box/box'
import { Section } from '../../styled/globals'
import { Title } from '../../styled/text/text';

export const Certificates = () => {

    const [numberCertificate, setNumberCertificate] = useState(0);

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
                                numberCertificate={ numberCertificate } 
                                setNumberCertificate={ setNumberCertificate }
                            />
                        ) )
                    }
                </Box>
            </Box>
        </Section>
    )
}
