import Breadcrumbs from '../components/Chunks/Breadcrumbs'
import Header from '../components/Chunks/Header'

const Product = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <main className='main'>
          <Breadcrumbs />
        </main>
      </div>
      {/* <main className='main'>
        <Header />
        <div className='container'>
          <Breadcrumbs />
        </div>
      </main> */}
    </>
  )
}

export default Product
