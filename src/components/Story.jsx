/* eslint-disable react/no-unescaped-entities */

import rect from '/images/foot.jpg';

const Story = () => {

  return (
    <div>
    <div
      className="story p-[2.7%] pt-5 bg-primary text-white"
    >
      
      <div className=" flex flex-col px-[3.5%] pt-[3.5%] pb-[2%]">
        <h1 className=" font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl tracking-[.25em] w-[40%]">
          Our Story
        </h1>
        <p className=" pt-[2.5%] font-Nunito  text-[8px] lg:text-xl md:text-base sm:text-sm xs:text-xs ">
          Founded with a vision to revolutionize hair care, <span className="font-Sofadi_One font-bold">HERBALUXE</span>  was born out of a desire to combine nature's finest ingredients with cutting-edge formulations.
           We believe that everyone deserves to have beautiful, healthy hair without compromising on the quality and safety of the products they use.
        </p>
      </div>
      
    </div>
    <div className="relative ">
        <img className="w-screen" src={rect} alt="" />
        
      </div>
      </div>
  );
};

export default Story;
