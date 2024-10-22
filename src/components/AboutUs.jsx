import courtimg from '/images/shampoo1.jpg';
import courtimg2 from '/images/shampoo3.jpg';
import courtimg3 from '/images/shampoo2.jpg';


const AboutUs = () => {
  return (
    <div
      className=" p-[3.5%] bg-cover bg-no-repeat"
      
    >
      <div className=" flex flex-col justify-center items-center text-secondary p-[2.5%]">
        <h1 className=" font-Sofadi_One lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl tracking-[.25em]">
          ABOUT US
        </h1>
        <p className=" font-Nunito  text-[8px] lg:text-xl md:text-base sm:text-sm xs:text-xs p-[3.5%]">
          Welcome to <b className='font-Sofadi_One text-primary'>HerbaLuxe</b> , where natural beauty meets advanced science.
          We are passionate about creating high-quality, effective hair care products that bring out the best in your hair and scalp.
          Our mission is to provide you with shampoos that are not only luxurious and refreshing but also packed with ingredients that truly benefit your hair health.
        </p>
      </div>
      <div className="flex justify-around items-center h-auto">
        <img className=" w-1/6 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={courtimg} alt="" />
        <img
          className="w-1/6 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={courtimg2}
          alt=""
        />
        <img className=" w-1/6 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={courtimg3} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
