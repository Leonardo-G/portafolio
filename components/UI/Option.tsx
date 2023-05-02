import React, { FC, useState } from 'react'
import { OptionStyle } from '../../styled/select/select';
import { Text } from '../../styled/text/text';
import { Flex } from '../../styled/box/box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IConocimientos } from '../../interface/conocimientos';
import { ITecnologia } from '../../interface/proyectos';

interface Props{
    option: ITecnologia;
    color: string;
    select: boolean;
    handleChangeOption: ( tecnology: ITecnologia ) => void;
}

export const Option: FC<Props> = ({ option, color, select, handleChangeOption }) => {

    return (
        <OptionStyle 
            background={ color } 
            backgroundSelect={ select }
            onClick={ () => handleChangeOption( option ) }
        >
            <Flex colCenter justifyContent='space-between'>
                <Text
                    color={ select ? "#fff" : "#000" }
                >{ option }</Text>
                {
                    select &&
                    <FontAwesomeIcon 
                        icon={ faCheck }
                        color='#fff'
                    />
                }
            </Flex>
        </OptionStyle>
    )
}
