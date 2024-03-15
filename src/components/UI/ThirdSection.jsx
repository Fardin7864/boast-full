/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <div className=" -mt-5">
      <div className=" flex flex-col items-center justify-center pb-20 card-section">
        <div data-aos="fade-down">
          <img
            className="block mx-auto "
            style={{ width: "500px" }}
            src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710434063/BOAST/6_o2qasw.png"
            alt=""
          />
        </div>

        <motion.h2
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
          className="text-center mr-20"
        >
          <span
            className="text-white text-4xl font-bold text-center"
            style={{ letterSpacing: "-2px" }}
          >
            Every Member gets a Prepaid card powered by <br />
            <span className="dhaka-bank text-center">Dhaka Bank</span> and
            <span className=" text-[#eb031b] "> Master </span>
            <span className=" text-[#f79e1b]">Card </span> <br />{" "}
            <span className="text-black text-center">
              {" "}
              Use the card to spend your Cashbacks anywhere.
            </span>
          </span>
        </motion.h2>
      </div>
    </div>
  );
};

export default ThirdSection;
