import type { NextPage } from 'next'
import { LayoutPage } from '../components/layout/LayoutPage'
import { Conocimientos } from '../components/section/Conocimientos'
import { Nosotros } from '../components/section/Nosotros'
import { Portada } from '../components/section/Portada'
import { Proyectos } from '../components/section/Proyectos'

const Home: NextPage = () => {
    return (
        <LayoutPage>
            <Portada />
            <Nosotros />
            <Conocimientos />
            <Proyectos />
        </LayoutPage>
    )
}

export default Home
