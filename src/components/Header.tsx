import React from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      {/* Top Section */}
      <div className="w-full bg-gray-100 flex px-4 py-2">
        <div className="flex items-center w-full max-w-4xl mx-auto justify-between">
          <div>
            <span className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-gray-500">
              THE MONGOLZ SHOP
            </span>
          </div>
          <div>
            <span className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-gray-500 flex gap-2 items-center">
              <CiDeliveryTruck size={18} />
              ЗАХИАЛГЫН ЯВЦ
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="w-full bg-white flex px-4 sm:px-8 md:px-16 lg:px-16 h-16 justify-center items-center">
        <div className="flex justify-between w-full max-w-4xl ">
          {/* Logo */}
          <div className="flex justify-start items-center">
            <img
              src="https://kom-uploads.s3.amazonaws.com/store-1599/logo-1707837939.jpg"
              alt="Logo"
              className="h-8"
            />
          </div>

          {/* Contact Info */}
          <div className="flex justify-center items-center ">
            <MdOutlinePhoneInTalk size={30} color="blue" />
            <div className="flex flex-col group max-w-40">
              <p className="text-gray-600 font-semibold group-hover:text-gray-900 text-sm">
                72444181
              </p>
              <p className="text-gray-400 text-xs group-hover:text-gray-600">
                Ажлын өдөр 09:00-18:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="w-full bg-neutral-600  sm:h-14">
        {/* Left Navigation */}
        <div className="flex justify-between items-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center gap-4">
            <IoMenu size={30} />
          </div>
          <div className="text-[10px] sm:text-[12px] text-white font-semibold">БҮХ БАРАА</div>
          <div className="text-[10px] sm:text-[12px] text-white font-semibold">НИЙТЛЭЛҮҮД</div>
        </div>

        {/* Search Icon */}
        <div className="flex items-center justify-center text-white">
          <FaSearch size={24} color="white" />
        </div>
      </div>
    </div>
  );
}
