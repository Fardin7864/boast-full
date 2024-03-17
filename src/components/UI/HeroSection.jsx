import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../Shared/Navbar";

const HeroSection = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden ">
      <div className="flex justify-center items-center pt-5 mt-5 lg:mt-16 hero-section h-auto lg:h-[100vh] overflow-hidden">
        <div style={{ zIndex: 100 }} className=" absolute top-0 w-full left-0">
          <Navbar />
        </div>

        {/* yellow section */}
        <div className=" absolute -left-[160px] bottom-[50px] lg:-bottom-[240px] lg:-left-[30rem] z-0">
          <Image
            src={"/hero/yellowbg.png"}
            className="w-[400px] lg:w-[1100px]"
            width={1100}
            height={0}
            // layout="fill"
            alt="yellow"
          />
        </div>
        {/* pink section */}
        <div
          style={{ zIndex: 0 }}
          className=" absolute -right-[6px] top-0 lg:right-[10px] lg:-top-[8rem] z-0 "
        >
          <Image
            src={"/hero/pinkbg.png"}
            className="w-[300px] md:w-[400px] lg:w-[900px]"
            width={900}
            height={0}
            alt="pink"
          />
        </div>
        {/* line 1 */}
        <div className=" absolute -left-16 top-14 lg:-top-10 lg:-left-40 z-0">
          <Image
            src={"/hero/line1.png"}
            className="w-[200px] lg:w-[600px]"
            width={600}
            height={0}
            alt="line 1"
          />
        </div>
        {/* line 2 */}
        <div className=" absolute top-4 lg:-top-[160px] left-[115px] md:left-[360px] lg:left-[390px]">
          <Image
            src={"/hero/line2.png"}
            className=" w-[250px] md:w-[350px] lg:w-[900px]"
            width={1000}
            height={0}
            alt="line2 "
          />
        </div>

        {/* Text and diloags */}
        <div className=" z-10 mt-36 ml-10 lg:ml-48 w-3/6">
          <h2
            className="text-xl md:text-3xl lg:text-6xl font-extrabold hero-title"
            style={{ letterSpacing: "-2px" }}
          >
            Upto 100 <span className="hero-p">%</span> cashback <br />
            <span className="text-black hero-title">
              {" "}
              on your
              <span
                style={{ position: "relative", display: "inline-block" }}
                className=" ml-5"
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fe5727",
                    height: "50%",
                    borderRadius: "6px",
                    zIndex: -1,
                  }}
                ></span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Shoutout",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " Post",
                    1000,
                    " Story",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h2>
          <button
            onClick={handleScrollToWishlist}
            className="bg-black my-5 hover:bg-[#fd7f3e] text-white font-bold px-4 lg:px-6 py-2 rounded-full hover:text-black duration-300 "
          >
            Early access
          </button>
        </div>

        {/* main Cha */}
        <div className=" relative top-8 left-30 md:left-[80px] lg:left-[50px]">
          <Image
            src={"/hero/boastC.png"}
            className="w-[200px] lg:w-[500px]"
            width={500}
            height={0}
            alt="main carecter"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
