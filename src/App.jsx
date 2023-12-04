import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout'

import './styles.css'
import './scripts.js'

import HomePage from './screens/HomePage'
import ProductPage from './screens/ProductPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
