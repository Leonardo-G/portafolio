import React, { FC } from 'react';
import { Box, Flex } from '../../styled/box/box';
import { Text } from '../../styled/text/text';
import { ITecnologia } from '../../interface/proyectos';

interface Props {
    title: ITecnologia;
}

export const Tecnologia: FC<Props> = ({ title }) => {
    return (
        <Box 
            background='#000'
            padding='5px 10px'
            radius='15px'  
            width='fit-content'
        >
            <Text 
                color='#fff'
                center
                size={ 12 }
            >{ title }</Text>
        </Box>
    )
}
