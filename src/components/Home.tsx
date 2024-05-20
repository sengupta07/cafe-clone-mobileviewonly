import Header from '../components/Header'
import Homepage from '../components/Homepage'
import SemiHeader from '../components/SemiHeader'
import Order from './Order'
import exit from "/exit-icon-4597.png"

function Home() {
    return (
        <div className='bg-black h-full font-poppins'>
            <Header top='Hello, Suman' bottom='Good afternoon!' img={exit} background='bg-gray-700' />
            <Homepage />
            <SemiHeader />
            <div className='mx-4 pb-6 mt-6'>
                <Order date='20 May, 2024' item='Aam Doi' quantity='1 x 15.0' total='15.0' status='Pending' />
            </div>
        </div>
    )
}

export default Home;