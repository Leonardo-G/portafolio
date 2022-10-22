import type { NextPage } from 'next'
import { LayoutPage } from '../components/layout/LayoutPage'
import { Nosotros } from '../components/section/Nosotros'
import { Portada } from '../components/section/Portada'

const Home: NextPage = () => {
    return (
        <LayoutPage>
            <Portada />
            <Nosotros />
        </LayoutPage>
    )
}

export default Home
