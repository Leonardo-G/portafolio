import React, { FC, ReactNode, useState } from 'react';
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

    return (
        <>
            <Head>
                <title>Leonardo Guanuco</title>              
            </Head>
            <main>
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
        </>
    )
}
