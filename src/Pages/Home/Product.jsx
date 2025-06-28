import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { IconButton } from '@mui/material';

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

    

    <div className="w-full">

      <img src={imageUrl} alt={productTitle} className="w-full object-contain" />
      <h3  className='text-sm font-bold text-stone-900'>{productTitle}</h3>
      <h3 className='text-sm font-semibold text-stone-900'>Rs.{price}/-</h3>
    </div>
    </IconButton>
  );
};

const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section>
      <h1 className='text-lg font-extrabold text-stone-800 mb-2.5'>{title}</h1>

      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{ rows: Number(rowsCount) }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
      >
        {productArray.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
