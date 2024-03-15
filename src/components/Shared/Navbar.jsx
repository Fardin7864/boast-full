import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" drop-shadow-lg navbar z-10">
      <div className="flex justify-between items-center mx-24 py-2">
        <Image
          src={
            "https://res.cloudinary.com/dy80ftu9k/image/upload/v1710427159/BOAST/1212_p9r7vr.webp"
          }
          width={100}
          height={0}
          alt="logo"
          className=""
        />
        <button
          onClick={handleScrollToWishlist}
          className="bg-white hover:bg-[#fd7f3e] text-black font-bold px-4 py-[6px] rounded-full hover:text-black duration-300 "
        >
          Get Boast
        </button>
      </div>
    </div>
  );
};

export default Navbar;
