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
            <div className="w-full bg-gray-100 flex  px-10 py-2">
                <div className="flex justify-between w-full max-w-4xl items-center">
                    <div>
                        <span className="text-[8px] text-gray-500">THE MONGOLZ SHOP</span>
                    </div>
                    <div>
                        <span className="text-[8px] text-gray-500 flex gap-2 items-center">
                        <CiDeliveryTruck size={18}/> 
                        ЗАХИАЛГЫН ЯВЦ
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Header Section */}
            <div className="w-full bg-white flex px-16 h-16 justify-center items-center">
                <div className="flex justify-between w-full max-w-4xl">
                    {/* Logo */}
                    <div>
                        <img
                            src="https://kom-uploads.s3.amazonaws.com/store-1599/logo-1707837939.jpg"
                            alt="Logo"
                            className="h-8"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex justify-center gap-2 items-center">
                    <MdOutlinePhoneInTalk size={30} color="blue"/>
                        <div className="flex flex-col group max-w-40">
                            <p className="text-gray-600 font-semibold group-hover:text-gray-900 text-sm">72444181</p>
                            <p className="text-gray-400 text-xs group-hover:text-gray-600">Ажлын өдөр 09:00-18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Section */}
            <div className="w-full bg-neutral-600 h-12 flex justify-between px-20 items-center">
                {/* Left Navigation */}
                <div className="flex justify-center items-center gap-6">
                    <div className="text-xl text-white">
                        <IoMenu size={30} />
                    </div>
                    <div className="text-[10px] text-white font-semibold">БҮХ БАРАА</div>
                    <div className="text-[10px] text-white font-semibold">НИЙТЛЭЛҮҮД</div>
                </div>

                {/* Search Icon */}
                <div className="flex items-center justify-center text-white">
                <FaSearch size={24} color="white"/> 
                </div>
            </div>
        </div>
    );
}
