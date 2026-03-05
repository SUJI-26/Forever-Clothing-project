import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />

          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
            esse aspernatur modi dignissimos perferendis delectus enim sunt,
            veniam facilis ducimus expedita obcaecati quis quaerat amet aut
            laudantium maxime sequi.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="lex flex-col gap-1 text-gray-600">
            <li>+18248018762</li>
            <li>Suji26262@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ Forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
