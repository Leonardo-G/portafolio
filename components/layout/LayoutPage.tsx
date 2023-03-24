import React, { FC, ReactNode, UIEvent } from 'react';
import Head from 'next/head';

import { Nav } from '../UI/Nav';
import { Box } from '../../styled/box/box';
import { Layout } from '../../styled/ui';

interface Props {
    children?: ReactNode
}

export const LayoutPage: FC<Props> = ({ children }) => {

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
