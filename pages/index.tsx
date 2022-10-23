import type { NextPage } from 'next'
import { LayoutPage } from '../components/layout/LayoutPage'
import { Conocimientos } from '../components/section/Conocimientos'
import { Contacto } from '../components/section/Contacto'
import { Footer } from '../components/section/Footer'
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
            <Contacto />
            <Footer />
        </LayoutPage>
    )
}

export default Home
