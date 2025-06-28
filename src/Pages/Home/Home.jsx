import React from 'react'
import Ads from './Ads'
import Product from './Product'


const Home = () => {
  return (
    <div className='px-5 py-[100px] w-full h-screen overflow-y-scroll bg-[#f5f5f5]'>

  <Ads></Ads>
  <Product title="Trending products" rowsCount={1} slidesPerView={3} />
      </div>
  

  )
}

export default Home