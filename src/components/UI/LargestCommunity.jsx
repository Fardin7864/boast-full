/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LargestCommunity = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-between items-center  px-28 py-20 w-full largest-project">
      <div className="" data-aos="fade-right" data-aos-easing="ease-in-sine">
        <h2
          className="text-5xl mb-4 font-extrabold text-white"
          style={{ letterSpacing: "-4px" }}
        >
          Join our Influencer Community,
        </h2>
        <h1 className=" text-white text-xl mb-4 mt-10 font-extralight">
          lifestyle, fashion, art, entrepreneurship, music, gaming and more-
          There is a place for you at Boast.
        </h1>
      </div>

      {/*  */}
      <img
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        style={{ width: "680px", height: "400px" }}
        src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710427160/BOAST/red_qkek6i.webp"
        alt=""
      />
    </div>
  );
};

export default LargestCommunity;
