import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Pagination, Navigation,Grid } from 'swiper/modules';



const adsElement = [
    {
        imageUrl:"https://wallpaperaccess.com/full/8652633.jpg"
    },{
        imageUrl:"https://wallpaperaccess.com/full/2962271.jpg"
    },{
        imageUrl:"https://wallpaperaccess.com/full/8652638.jpg"
    }
]
const AdUnit = ({imageUrl,id})=>(
    <SwiperSlide>
        <img src={imageUrl}
         alt={`ad${id}`}
         className='w-full object-contain rounded-lg' />
    </SwiperSlide>
)

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
        className='mb-[20px]'
      >
   
          {adsElement.map(({imageUrl},index)=>{
            return(
                <SwiperSlide>
             <AdUnit key={index} imageUrl={imageUrl} id={index} />

                </SwiperSlide>
             ) ;
        })}
            
       
      
      </Swiper>
    </>
  );
}

export default Ads

