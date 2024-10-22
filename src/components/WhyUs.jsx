import bg from '/images/logo.png';

const WhyUs = () => {
  return (
    <div
      className="px-[3.5%] text-secondary bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: ' center',
        backgroundSize: '45%',
      }}
    >
      <div className="flex flex-col p-[2.7%] ">
        <h1 className=" text-center font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
        Why Choose Us?
        </h1>
        <p className="  py-[2.5%]">
        </p>

        <ul className="list-none font-Nunito pe-[12%] text-[8px] lg:text-xl md:text-base sm:text-sm xs:text-xs tracking-wide">
          <li className="relative ps-[4.5%] mb-[2%]">
            {' '}
            <b className='text-primary font-Nunito_italic'>Effective Formulations:</b> Our shampoos are designed to address common hair and scalp concerns with scientifically-backed ingredients.
          </li>
          <li className="relative ps-[4.5%] mb-[2%]">
            {' '}
            <b className='text-primary  font-Nunito_italic'>Natural Ingredients:</b> We harness the power of nature to provide your hair with the nourishment it needs.
          </li>
          <li className="relative ps-[4.5%] mb-[2%]">
            {' '}
            <b className='text-primary  font-Nunito_italic'>Sustainability:</b> We are dedicated to sustainable practices in every aspect of our business.
          </li>
          <li className="relative ps-[4.5%] mb-[2%]">
            {' '}
            <b className='text-primary  font-Nunito_italic'>Customer Satisfaction:</b> Your hair care journey is important to us, and we strive to provide exceptional products and service.
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
