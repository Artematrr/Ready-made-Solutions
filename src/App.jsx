import Footer from './components/Chunks/Footer'
// import Header from './components/Chunks/Header'
import Sidebar from './components/Chunks/Sidebar'
import './styles.css'
import HomePage from './Templates/HomePage'

function App() {
  return (
    <div className='page-wrapper'>
      <div className='content-wrapper'>
        <Sidebar />
        <HomePage />
      </div>
      <Footer />
    </div>
  )
}

export default App
