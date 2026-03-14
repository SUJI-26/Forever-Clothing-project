import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a clothing brand focused on creating stylish, comfortable,
            and high-quality apparel for everyday wear. Our goal is simple:
            design clothes that look good, feel great, and fit perfectly into
            modern lifestyles. Every piece is created with attention to detail,
            combining contemporary style with reliable craftsmanship.
          </p>

          <p>
            We believe clothing is more than just fabric — it is a way to
            express confidence and personality. Our collections are designed to
            be versatile, timeless, and accessible, allowing people to look
            sharp without sacrificing comfort.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission is to deliver fashionable, high-quality clothing that
            people can wear with confidence every day. We focus on clean
            designs, durable materials, and consistent quality so our customers
            receive clothing that not only looks great but also lasts.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            We maintain strict quality standards to ensure every product is
            durable, comfortable, and well-crafted. Each item is carefully
            designed and inspected so customers receive clothing that meets high
            expectations in both style and quality.
          </p>
        </div>

        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">
            Our goal is to make shopping simple and seamless. From easy browsing
            to a smooth checkout process, we ensure customers can find and
            purchase their favorite styles quickly and effortlessly.{" "}
          </p>
        </div>

        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">
            We are committed to providing reliable and responsive customer
            support. Our team focuses on helping customers with their needs,
            ensuring a smooth shopping experience and building long-term
            trust.{" "}
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
