/* eslint-disable react/prop-types */
const Ingredient = ({ image, title, paragraph }) => {
    return (
      <div className="flex pb-0 p-[2.7%]">
        <img className="w-[30%] rounded-[46px]" src={image} alt="" />
        <div className="w-[60%] flex flex-col justify-center text-secondary ps-[5%] pe-0">
          <h1 className=" font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl tracking-[.1em] ps-[1.8%]">
            {title}
          </h1>
          <p className=" font-Nunito text-[8px] lg:text-xl md:text-base sm:text-sm xs:text-xs pb-[3%] p-[1.8%]">
            {paragraph}
          </p>
        </div>
      </div>
    );
  };
  
  export default Ingredient;
  