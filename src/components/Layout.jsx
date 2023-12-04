import { Outlet } from 'react-router-dom'
import Sidebar from './elements/Sidebar'
import Header from './elements/Header'
import Footer from './elements/Footer'


function Layout() {
  return (
    <>
      <div className='page-wrapper'>
        <div className='content-wrapper'>
          <Sidebar />
          <div className='container'>
            <Header />
            <div className='content'>
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export { Layout }
