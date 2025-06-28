import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';
import { IconButton, Rating } from '@mui/material';
import './style2.css';



const productArray = [
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 1"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 2"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 3"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 3"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 3"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 3"
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/187273.jpg",
    price: 1000,
    productTitle: "Sample Product 3"
  }
];

const ProductUnit = ({ imageUrl, price, productTitle }) => {
  return (

    <IconButton
    sx={{
        padding:'5px',
        borderRadius:"5px"
    }

    }>

    

    <div className="w-full xx ">

      <img src={imageUrl} alt={productTitle} className="w-full object-contain" />
      <h3  className='text-sm font-bold text-stone-900'>{productTitle}</h3>
      <Rating
  name={imageUrl}
  value={3.3}
  precision={0.5}
 readOnly
  />
      <h3 className='text-sm font-semibold text-stone-900'>Rs.{price}/-</h3>
    </div>
    </IconButton>
  );
};

const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
<div
 className="pt-[5px] pb-[100px] "

>
  <h1 className='font-semibold'>{title}</h1> {/* push down from header, up from footer */}
  <section className="xx">
    <Swiper
      className="h-full w-full"
      slidesPerView={Number(slidesPerView)}
      grid={{ rows: Number(rowsCount) }}
      spaceBetween={30}
      pagination={{ clickable: true, dynamicBullets: true }}
      mousewheel={true}
      modules={[Grid, Pagination, Mousewheel]}
    >
      {productArray.map(({ imageUrl, price, productTitle }, index) => (
        <SwiperSlide key={index}>
          <ProductUnit
            imageUrl={imageUrl}
            price={price}
            productTitle={productTitle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
</div>


  );
};

export default Product;
