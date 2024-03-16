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
import axios from "axios";
import Swal from "sweetalert2";

const BrandSection = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [brand, setBrand] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    instagramId: "",
    otherSocialMediaId: "",
    phoneNo: "",
    followers: "",
  });
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

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
    setBrand("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitBrand = (e) => {
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
      email: formData.email,
      followers: formData.followers,
      brand: brand,
    };
    // console.log(user)
    const res = await axios.post(
      "http://localhost:5000/api/v1/add-waitlist",
      user
    );
    // console.log(res.data)
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Achived early access now!",
      });
      handleClose();
    } else if (res.data.message === "This email already registered") {
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
        <form className="flex" onSubmit={handleSubmitBrand}>
          <input
            type="text"
            required
            placeholder="Name your favorite local brand"
            className={`rounded-l-lg text-gray-700  bg-white border border-none px-3 focus:outline-none brandPlaceholder w-64`}
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
                Join early access
              </ModalHeader>
              <ModalBody className=" ">
                <form onSubmit={handleSubmit}>
                  <Input
                    className="mb-5"
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
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Input
                    variant="underlined"
                    className="mb-5"
                    type="text"
                    name="followers"
                    value={formData.followers}
                    onChange={handleInputChange}
                    placeholder="Number of followers on Insta/FB/tiktok"
                  />
                  <Input
                    variant="underlined"
                    type="text"
                    // label="Number of followers on Insta/FB/tiktok"
                    placeholder="Name your favourite local brand"
                    value={brand}
                  />
                  <div className=" w-full flex flex-col justify-center items-center mt-5">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#DE3996] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                    >
                      Submit
                    </button>
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
  );
};

export default BrandSection;
