const Hero = () => {
    return (
      <div className="hero md:px-[3.5%] lg:pt-0 pt-[9%] pb-[2%] md:pt-[2%] relative">
        <div className="md:px-[2.7%] h-[60vh] flex items-center justify-center">
          <div className="text-white w-5/6 md:w-1/2 flex flex-col pt-[8%] relative">
            <div className="font-Sofadi_One bg-gray-500/50 p-[2.5%] rounded-md">
              <h1>HerbaLuxe Shampoo</h1>
              <h6 className=" font-Sofadi_One text-[8px] lg:text-3xl md:text-[18px] sm:text-[15px] xs:text-[12px] tracking">
              Elevate Your Hair Care with Nature’s Luxury
              </h6>
              <p className=" pt-[2.5%] pe-1 font-Nunito text-[8px] lg:text-xl md:text-base sm:text-sm xs:text-xs ">
              Experience the perfect blend of natural ingredients and premium care.
               HerbaLuxe nourishes your hair from root to tip, leaving it refreshed,
                healthy, and full of life. Embrace the power of nature, every wash.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;