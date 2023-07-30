import React, { useContext, useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/section/Portada.module.css";
import { BoxWhite } from '../../styled/ui';
import { Text, TitleMain } from '../../styled/text/text';
import { Section } from '../../styled/globals';
import { Position } from '../../styled/position/position';
import { Box } from '../../styled/box/box';

export const Portada = () => {

    const { changeCampoNav } = useContext(UIContext);
    const [isOn, setIsOn] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        setIsOn( true );
    }, [])

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "inicio" )
        }

        //eslint-disable-next-line
    }, [inView])

    return (
        <Section 
            ref={ ref } 
            id="inicio"
            background="#ffff00"
        >
            <Box 
                height='700px' 
                heightXM='500px'
                className='container relative'
            >
                <Position top="60%">
                    <TitleMain 
                        size={ 80 }
                        sizeXL={ 50 }
                        sizeXM={ 35 }
                    >Hola, Soy Leonardo Guanuco</TitleMain>
                    <Text 
                        size={ 35 }
                        sizeXL={ 24 }
                        sizeXM={ 20 }    
                    >Desarrollador JavaScript / TypeScript</Text>
                </Position>
                <BoxWhite 
                    height={ 156 }
                    width="10%"
                    left="10%"
                ></BoxWhite>
                <BoxWhite 
                    height={ 78 }
                    width="12.5%"
                    right="40%"
                ></BoxWhite>
                <BoxWhite 
                    height={ 56 }
                    width="36%"
                    right="5%"
                    top='9%'
                ></BoxWhite>
                <BoxWhite 
                    height={ 110 }
                    width="9%"
                    top="43%"
                    left='5%'
                ></BoxWhite>
                <BoxWhite 
                    height={ 125 }
                    width="10%"
                    top="32%"
                    left='22%'
                ></BoxWhite>
                <BoxWhite 
                    height={ 82 }
                    width="14%"
                    top="60%"
                    left='25%'
                ></BoxWhite>
                <BoxWhite 
                    height={ 187 }
                    width="18%"
                    top="35%"
                    left='42%'
                ></BoxWhite>
                <BoxWhite
                    width="15%"
                    height={ 164 }
                    top="65%"
                    left='0%'
                ></BoxWhite>
                <BoxWhite
                    height={ 125 }
                    width="5%"
                    top="80%"
                    left='42%'
                ></BoxWhite>
                <BoxWhite
                    height={ 86 }
                    width="20%"
                    top="78%"
                    left="52%"
                ></BoxWhite>
                <BoxWhite
                    width='30%'
                    top='68%'
                    height={46}
                    left="68%"
                ></BoxWhite>
            </Box>
        </Section>
    )
}
