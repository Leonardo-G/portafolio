import Head from 'next/head';
import React, { FC, ReactNode } from 'react';

import styles from "../../styles/layout/LayoutPage.module.css";
import { Footer } from '../section/Footer';
import { Nav } from '../UI/Nav';

interface Props {
    children?: ReactNode
}

export const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Leonardo Guanuco</title>              
            </Head>
            <main>
                <div className={ styles.layout }>
                    <div className={ styles.layout__nav }>
                        <Nav />
                    </div>
                    <div className={ styles.layout__main }>
                        <div className='container'>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
