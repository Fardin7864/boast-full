/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row items-center justify-between px-28 pt-28 second-section gap-20">
      <div
        className="w-1/2"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <h2
          className="text-white text-6xl font-extrabold mb-6"
          style={{ letterSpacing: "-2px" }}
        >
          Are you an influencer?
        </h2>
        <h2
          className="text-white text-xl font-semibold text-justify"
          style={{ letterSpacing: "-1px", fontFamily: "Montserrat" }}
        >
          
          Even if you are not, it doesn&#x2019;t hurt getting things for free,
          does it? Boast provides you <span className=" text-black font-bold">10-100% cashback</span> based on your Social
          media reach whenever you buy something from our <span className=" text-black font-bold"><b>Partner Brands</b></span> and
          share your purchase on Social media. You also get paid projects thrown
          your way every now and then. You can apply for Membership if you have
          a minimum of 1000 followers. <span className=" text-black font-bold"> Our Membership is free.</span>
        </h2>
      </div>

      <Image
        // className="mx-auto block"
        data-aos="fade-down"
        data-aos-easing="linear"
        height={500}
        width={500}
        src="/hero/laptop.png"
        alt=""
        />
        {/* src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710434061/BOAST/redsection_wqz2cz.png" */}
      {/* <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710445310/BOAST/123234_fqguft.png" alt="" 
      className="w-[600px] h-[600px] border-4 relative -top-28"
      /> */}
    </div>
  );
};

export default SecondSection;
