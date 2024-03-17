/* eslint-disable @next/next/no-img-element */
"use client"
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
import axios from "axios";
import Swal from "sweetalert2";

const WishlistForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    instagramId: "",
    otherSocialMediaId: "",
    phoneNo: "",
    followers: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    resetFormData();
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      instagramId: "",
      otherSocialMediaId: "",
      phoneNo: "",
      followers: "",
    });
    setEmail("")

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    handleJoinNow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handleClose(); // Close modal after form submission
    const user = {
      name: formData.name,
      instagramId: formData.instagramId,
      otherSocialMediaId: formData.otherSocialMediaId,
      phoneNo: formData.phoneNo,
      email: email,
      followers: formData.followers,
    }
    const res = await axios.post("https://boast-server.vercel.app/api/v1/add-waitlist",user)
    // console.log(res.data)
    if(res.data.insertedId){
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your on the waitlist now!",
      });
      handleClose()
    }
    else if(res.data.message === 'This email already registered'){
      Swal.fire({
        icon: "error",
        title: "Ops..",
        text: "This email already exist!",
      });
      handleClose();
    }
    // console.log("Form submitted with data:", user, "email:", email);
  };

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
            <form className="flex " onSubmit={handleSubmitEmail}>
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
                    <form onSubmit={handleSubmit}>
                      <Input
                        variant="underlined"
                        type="text"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <div className="flex gap-5 mb-5">
                        <Input
                          variant="underlined"
                          type="text"
                          label="Instagram ID"
                          name="instagramId"
                          value={formData.instagramId}
                          onChange={handleInputChange}
                        />
                        <Input
                          variant="underlined"
                          type="text"
                          label="Other Social Media ID"
                          name="otherSocialMediaId"
                          value={formData.otherSocialMediaId}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex gap-5 mb-5">
                        <Input
                          variant="underlined"
                          type="text"
                          label="Phone No."
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleInputChange}
                        />
                        <Input
                          variant="underlined"
                          type="email"
                          label="Email"
                          name="email"
                          value={email}
                        />
                      </div>
                      <Input
                        variant="underlined"
                        type="text"
                        placeholder="Number of followers on Insta/FB/tiktok"
                        name="followers"
                        value={formData.followers}
                        onChange={handleInputChange}
                      />
                      <div className=" w-full flex flex-col justify-center items-center mt-5">
                      <button 
                      type="submit"
                      className="bg-black hover:bg-[#DE3996] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                      >Submit</button>
                      </div>
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
