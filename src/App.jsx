import './styles.css'
import './scripts.js'

// import Header from './components/Chunks/Header'
import Footer from './components/Chunks/Footer'
import Sidebar from './components/Chunks/Sidebar'
// import HomePage from './Templates/HomePage'
import Product from './Templates/Product.jsx'
// import Product from './Templates/Product'

function App() {
  return (
    <div className='page-wrapper'>
      <div className='content-wrapper'>
        <Sidebar />
        {/* <HomePage /> */}
        <Product /> 
      </div>
      <Footer />
    </div>
  )
}

export default App
