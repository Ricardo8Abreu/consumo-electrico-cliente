// These styles apply to every route in the application
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Modales from './Modales/Modales';
import ModalContextProvider from '../../context/ModalContext/ModalContext';

const Layout = ({ children }) => {
  return (
    <div className=' flex flex-col h-screen w-screen text-black'>
      <ModalContextProvider>

        <Modales />
        <Header />
        <main className='bg-white grow h-[300px]'>
          {children}
        </main>
        <Footer />
      </ModalContextProvider>
    </div>
  )
}

export default Layout

