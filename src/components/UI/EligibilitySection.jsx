/* eslint-disable @next/next/no-img-element */
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EligibilitySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="justify-between flex flex-col lg:flex-row gap-20 lg:gap-0 items-center px-28 py-20 w-full eligibility-section">
      <div data-aos="fade-right" data-aos-easing="ease-in-sine">
        <h2
          className="text-6xl mb-4 font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          Eligibility
        </h2>
        <div className="my-10">
          <h5 className="flex items-center gap-3 font-bold pb-3 text-xl text-[#fd7f3e]">
            <span>
              <FaStar />
            </span>
            1000 followers on any social media platform.
          </h5>
          <h5 className="ml-5">
            ( If you have this you can apply for our Membership. <br /> But the
            more followers the better you encash.)
          </h5>
        </div>
        <button
          onClick={handleScrollToWishlist}
          className="bg-black hover:bg-[#fd7f3e] text-white font-bold px-6 py-4 rounded-full hover:text-black duration-300 "
        >
          Join our waitlist
        </button>
      </div>

      {/*  */}

      <div>
        <img
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          style={{ width: "648px" }}
          src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710427161/BOAST/her_lxfudb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default EligibilitySection;
