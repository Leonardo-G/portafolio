import React, { FC, ReactNode, useState } from 'react';
import Head from 'next/head';

import { Nav } from '../UI/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from "../../styles/layout/LayoutPage.module.css";

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
                <div style={{ width: "100%", overflow: "hidden" }}>
                    <div 
                        className={` ${ styles.layout__nav } ${ isOpenNav && styles['layout__nav--open']} `}
                    >
                    </div>
                    
                    <div 
                        className={ styles.button__navbar }
                        onClick={ () => isOpenNav ? setIsOpenNav( false ) : setIsOpenNav( true ) }    
                    >
                        {
                            isOpenNav ?
                                <FontAwesomeIcon 
                                    icon={ faXmark }
                                    style={{ color: "#fff" }}
                                />
                            :
                                <FontAwesomeIcon 
                                    icon={ faBars }
                                />
                        }
                    </div>
                    <div className={ styles.layout__main }>
                        <div>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
