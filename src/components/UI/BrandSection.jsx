/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Input, ModalHeader } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const BrandSection = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [brand, setBrand] = useState("");
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setBrand("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleJoinNow();
  };
  return (
    <div className=" pb-14  brand-section">
      <div className="">
        <div className=" pt-7">
          <Marquee autoFill="true">
            <img
              className=" mr-10"
              style={{ height: "80px", width: "100px" }}
              src="/images/logo1.png"
              alt="image1"
            />

            <img
              style={{ height: "35px" }}
              className=" mr-10"
              src="/images/logo2.png"
              alt="image2"
            />

            <img
              style={{ height: "100px", width: "90px" }}
              className=" mr-10"
              src="/images/logo3.png"
              alt="image3"
            />

            <img
              style={{ height: "90px", width: "100px" }}
              className=" mr-10"
              src="/images/logo4.png"
              alt="image4"
            />

            <img
              style={{ height: "30px" }}
              className=" mr-10"
              src="/images/logo5.png"
              alt="image5"
            />

            <img
              className=" mr-10"
              style={{ height: "100px", width: "90px" }}
              src="/images/logo6.png"
              alt="image6"
            />
          </Marquee>
        </div>
      </div>

      <p
        className="text-center mt-5 text-3xl font-bold text-white"
        style={{ letterSpacing: "3px" }}
      >
        Don&#x2019;t see your favorite brands?
      </p>

      <h2
        className="text-center pb-3 pt-3 text-lg font-bold text-slate-100"
        style={{ fontFamily: "Gilroy" }}
      >
        Which brands you want to see partner with us next?
      </h2>

      <div className=" flex justify-center mb-8 mt-2">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Name your favorite local brand"
            className={`rounded-l-lg text-white  bg-white border border-none px-3 focus:outline-none brandPlaceholder w-64`}
            onChange={handleBrandChange}
            value={brand}
          />
          <Button
            type="submit"
            onClick={handleJoinNow}
            className="rounded-r-lg rounded-l-none text-white bg-[#fd7f3e]"
          >
            Add
          </Button>
        </form>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="bg-[#fd7f3e] text-white">
                Name your favorite local brand
              </ModalHeader>
              <ModalBody className=" ">
                <form action="" className="">
                  <Input
                    className="mb-5"
                    variant="underlined"
                    type="text"
                    label="Name"
                    // placeholder="Enter your Name"
                  />
                  <div className="flex gap-5 mb-5">
                    <Input
                      variant="underlined"
                      type="text"
                      label="Instagram ID"
                      // placeholder="Enter your Instagram ID"
                    />
                    <Input
                      variant="underlined"
                      type="text"
                      label="Other Social Media ID"
                      // placeholder="Other Social Media ID"
                    />
                  </div>
                  <div className="flex gap-5 mb-5">
                    <Input
                      variant="underlined"
                      type="text"
                      label="Phone No."
                      // placeholder="Enter your Phone No."
                    />
                    <Input
                      variant="underlined"
                      type="email"
                      label="Email"
                      // placeholder="Enter your email"
                    />
                  </div>
                  <Input
                    variant="underlined"
                    className="mb-5"
                    type="text"
                    // label="Number of followers on Insta/FB/tiktok"
                    placeholder="Number of followers on Insta/FB/tiktok"
                  />
                  <Input
                    variant="underlined"
                    type="text"
                    // label="Number of followers on Insta/FB/tiktok"
                    placeholder="Name your favourite local brand"
                    value={brand}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={handleClose}
                  className="rounded-full"
                >
                  Cancel
                </Button>
                <button
                  onClick={handleClose}
                  className="bg-black hover:bg-[#DE3996] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                >
                  Join
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BrandSection;

//

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "gray",
//       }}
//       onClick={onClick}
//     />
//   );
// }
