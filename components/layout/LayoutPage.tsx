import React, { FC, ReactNode, UIEvent, useState } from 'react';
import Head from 'next/head';

import { Nav } from '../UI/Nav';
import { Box } from '../../styled/box/box';
import { Layout } from '../../styled/ui';

interface Props {
    children?: ReactNode
}

export const LayoutPage: FC<Props> = ({ children }) => {
    
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    
    const handleScroll = ( e: UIEvent<HTMLDivElement> ) => {
        console.log( window.pageYOffset );
    }

    return (
        <Layout
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
        >
            <Head>
                <title>Leonardo Guanuco</title>              
            </Head>
            <main
                onScroll={ handleScroll }
                className="cursor"
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
        </Layout>
    )
}
