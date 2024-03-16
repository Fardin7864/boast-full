/* eslint-disable @next/next/no-img-element */
import { Button, Input, ModalHeader } from "@nextui-org/react";
import style from "../../styles/WishlistForm.module.css";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WishlistForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleJoinNow();
  };

  //

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <>
      <div
        id="wishlistForm"
        className="flex flex-col-reverse lg:flex-row gap-10 md:gap-20 lg:gap-0 justify-between items-center px-10 lg:px-28 pt-10 lg:pt-20 wishlist-section overflow-hidden"
      >
        <img
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="w-[663px] "
          // style={{ width: "663px", height: "549px" }}
          src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710427161/BOAST/Screenshot-2023-03-08-at-12.50.37-AM-1024x848_iitlok.png"
          alt=""
        />

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          className="mr-0 lg:mr-24 flex flex-col items-center justify-center"
        >
          <h1 className=" text-white text-center lg:text-start text-xl lg:text-2xl mb-2 font-bold ml:0 lg:-ml-3">
            Want to be an early adaptor?
          </h1>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-2 hero-title font-extrabold"
            style={{ letterSpacing: "-2px" }}
          >
            <span className=" font-extrabold">Join Early Access!</span>
          </h2>
          <div className="my-3">
            <form className="flex " onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter Your Email here"
                className={`text-black rounded-l-lg bg-white border-none border-black px-3 focus:outline-none ${style.placeholderWhite}`}
                onChange={handleEmailChange}
                value={email}
              />
              <Button
                type="submit"
                onClick={handleJoinNow}
                className="rounded-none text-white bg-black rounded-r-lg"
              >
                Join Now
              </Button>
            </form>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="bg-[#ffc200]">
                    Join Our Wishlist
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
                          value={email}
                        />
                      </div>
                      <Input
                        variant="underlined"
                        type="text"
                        // label="Number of followers on Insta/FB/tiktok"
                        placeholder="Number of followers on Insta/FB/tiktok"
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

        {/*  */}
      </div>
    </>
  );
};

export default WishlistForm;
