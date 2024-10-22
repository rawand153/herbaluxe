/* eslint-disable react/jsx-key */

import Ingredient from './Ingredient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Ingredients = () => {
  const types = [
    {
      image: '/images/ment.jpg',
      title: 'Mint',
      paragraph:
        "Known for its cooling and soothing properties, mint invigorates the scalp, improves blood circulation, and helps to reduce dandruff with its antiseptic and anti-inflammatory benefits.",
    },
    {
      image: '/images/alovera.jpg',
      title: 'Aloe Vera',
      paragraph:
        'Aloe vera is a natural moisturizer that soothes and hydrates the scalp, reducing inflammation and dryness while promoting a healthy scalp environment. ',
    },
    {
      image: '/images/coconutOil.jpg',
      title: 'Coconut Oil',
      paragraph:
        'Coconut oil deeply moisturizes the hair and scalp. It has antifungal properties that help reduce dandruff and can also strengthen hair, reducing breakage and split ends.',
    },
    {
      image: '/images/teatreeoil.jpg',
      title: 'Tea Tree Oil',
      paragraph:
        'Tea tree oil has antimicrobial and anti-inflammatory properties that help treat scalp conditions like dandruff and itchiness. It helps to unclog hair follicles and maintain a healthy scalp.',
    },
    {
      image: '/images/acid.jpg',
      title: 'Salicylic Acid',
      paragraph:
        "Salicylic acid helps to exfoliate the scalp, removing dead skin cells and reducing dandruff. It can also help to treat seborrheic dermatitis and psoriasis on the scalp.",
    },
  ];
  return (
    <div
      className="bg-cover bg-no-repeat py-0 p-[3.5%] relative"
      
    >
      <div className="flex flex-col justify-center items-center pb-0 p-[3.5%]">
        <h1 className="text-secondary font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl tracking-[.25em]">
          Our Ingredients
        </h1>
        <p className='font-Nunito text-[8px] lg:text-base md:text-sm sm:text-xs xs:text-xs pb-[3%] p-[1.8%]'>
          At <b className='font-Sofadi_One text-primary'>HERBALUXE</b>, we carefully select each ingredient to ensure that our shampoos deliver the best results.
        </p>
      </div>

      <Swiper
        
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {types.map((ingredient, index) => {
          return (
            <SwiperSlide key={index}>
              <Ingredient
                
                image={ingredient.image}
                title={ingredient.title}
                paragraph={ingredient.paragraph}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Ingredients;
