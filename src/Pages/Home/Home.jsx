import React, { useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../components/Loading/Loading'


const Home = () => {
  const[loading,setLoading]=useState(false)
  if(loading){ return <Loading />}
  else{
    return (
    <div className='px-5 py-[100px] w-full h-screen overflow-y-scroll bg-[#f5f5f5]'>
      <Ads></Ads>
      <Product title="Trending products" rowsCount={1} slidesPerView={3} />
      <Product title="Categories" rowsCount={1} slidesPerView={3} />
      <Product title="Computer accecories" rowsCount={1} slidesPerView={3} />
    </div>
  )   
  }  
}
export default Home