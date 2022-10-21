import type { NextPage } from 'next'
import { LayoutPage } from '../components/layout/LayoutPage'
import { Portada } from '../components/portada/Portada'

const Home: NextPage = () => {
    return (
        <LayoutPage>
            <Portada />
        </LayoutPage>
    )
}

export default Home
