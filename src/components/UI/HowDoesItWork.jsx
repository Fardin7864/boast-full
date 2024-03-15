/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const HowDoesItWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <div
        // style={{ backgroundColor: "#b2e92e" }}
        className="flex justify-between items-center py-20 pl-28 how-does-it-work"
      >
        <div className="w-2/4">
          <h2
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="text-gray-900 text-center lg:text-start text-5xl font-extrabold "
            style={{ letterSpacing: "-3px" }}
          >
            How Does it work?
          </h2>
          <div data-aos="fade-left" className=" my-5 flex flex-col gap-8">
            {/* staps */}
            <div className=" py-4 flex items-center gap-3">
              <div>
                <span className=" absolute bg-white border border-black py-[25px] px-[55px] rounded-md">
                  {" "}
                </span>
                <span className="relative bg-[#fd7f3e] border border-black top-[9px] px-[41px] left-[3px] text-black font-ext p-3 py-4 rounded-md">
                  Buy
                </span>
              </div>
              <div className=" mt-5">
                <FaArrowRight />
              </div>{" "}
              <div>
                <span className=" absolute bg-white border border-black py-[25px] px-[55px] rounded-md">
                  {" "}
                </span>
                <span className="relative bg-[#fd7f3e] border border-black top-[9px] left-[3px] px-[39px] text-black font-ext p-3 py-4 rounded-md">
                  Post
                </span>
              </div>
              <div className=" mt-5">
                <FaArrowRight />
              </div>
              <div>
                <span className=" absolute bg-white border border-black py-[25px] px-[55px] rounded-md">
                  {" "}
                </span>
                <span className="relative bg-[#fd7f3e] border border-black top-[9px] left-[3px] px-[38px] text-black font-ext p-3 py-4 rounded-md">
                  Earn
                </span>
              </div>
            </div>

            {/* MESSAGES */}
            <div
              className=" w-11/12"
              data-aos="fade-left"
              data-aos-easing="linear"
            >
              <h2
                className="text-black text-2xl flex gap-2 my-3 font-bold"
                style={{ fontFamily: "Montserrat" }}
              >
                <span className="text-sm mt-2">
                  <FaStar className=" text-2xl text-orange-500" />
                </span>
                You become our{" "}
                <span className=" font-extrabold text-white ">member.</span>
              </h2>
              {/* 2nd message */}
              <div className=" flex gap-2">
                <FaStar className=" text-2xl text-orange-500 mt-3" />
                <h2
                  className="text-black text-2xl my-3 font-bold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Shop from any of our
                  <span className=" font-extrabold text-white ">
                    {" "}
                    Partner Brands{" "}
                  </span>{" "}
                  and <span className=" font-extrabold text-white ">
                    post
                  </span>{" "}
                  it on social media.
                </h2>
              </div>

              <div className=" flex gap-2">
                <FaStar className=" text-2xl text-orange-500 mt-3" />
                <h2
                  className="text-black text-2xl flex gap-2 my-3 font-bold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <span
                    className="font-bold"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Get{" "}
                    <span className=" font-extrabold text-white ">
                      Cashback
                    </span>{" "}
                    depending on you{" "}
                    <span className=" font-extrabold text-white ">
                      Boasting
                    </span>{" "}
                    power.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div data-aos="fade-up" at className="w-2/4">
          <Image
            src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710446291/BOAST/5_n47fz6.png"
            width={900}
            height={0}
            alt="phone"
            // className=" w-[900px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
