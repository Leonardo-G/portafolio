import React, { FC, ReactNode, UIEvent, useState } from 'react';
import Head from 'next/head';

import { Nav } from '../UI/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from "../../styles/layout/LayoutPage.module.css";
import { Box } from '../../styled/box/box';

interface Props {
    children?: ReactNode
}

export const LayoutPage: FC<Props> = ({ children }) => {
    
    const [isOpenNav, setIsOpenNav] = useState(false);
    
    const handleScroll = ( e: UIEvent<HTMLDivElement> ) => {
        console.log( window.pageYOffset );
    }

    return (
        <div>
            <Head>
                <title>Leonardo Guanuco</title>              
            </Head>
            <main
                onScroll={ handleScroll }
            >
                <header>
                    <nav>
                        <Nav />
                    </nav>
                </header>
                <Box width='100%' ovHidden>
                    <div>
                        { children }
                    </div>
                </Box>
            </main>
        </div>
    )
}
