import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const adsElement = [
    {
        imageUrl:"https://wallpaperaccess.com/full/8652633.jpg"
    },{
        imageUrl:"https://imagecdn.enzymic.co/custom_template/35575/1a54283bad218f640c573f60e4d6553d?v=1750130461"
    },{
        imageUrl:"https://wallpaperaccess.com/full/8652638.jpg"
    }
]


const Ads =()=>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
      >      
        <SwiperSlide>
            <AdUnit imageUrl={adsElement[0].imageUrl} id="1" />          
        </SwiperSlide>             
        <SwiperSlide>
            <AdUnit imageUrl={adsElement[2].imageUrl} id="3" />          
        </SwiperSlide>     
      </Swiper>
    </>
  );
}
const AdUnit = ({imageUrl,id})=>(
    <SwiperSlide>
        <img src={imageUrl}
         alt={`ad${id}`}
         className='w-full object-contain rounded-lg' />
    </SwiperSlide>
)

export default Ads

