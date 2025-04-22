"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Home() {
  const [opacity, setOpacity] = useState(100);


  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex w-full bg-white py-4 px-4 justify-center">
        <img
          src="https://kom-uploads.s3.amazonaws.com/store-1599/hero--1709463990-w1600.jpg"
          alt="Transition Image"
          className={`
        w-[100%]
        rounded-md 
        opacity-0
        transition-opacity 
        duration-[2000ms] 
        ease-in-out
        opacity-${opacity}
        md:w-[50%]
        lg:w-[80%]
        xl:w-[50%]`}
        />
      </div>
      <div className="flex-flex-col items-center py-6">
        <span className="text-gray-600 text-[30px] font-bold px-6">
          Бүх бараа
        </span>
        <hr className=" w-full m-auto max-w-[calc(100%-60px)] border-t border-gray-200 mt-2" />
        <section className="flex  w-full px-8 py-8 justify-center
        md:w-[50%]flex flex-col
        lg:w-[80%]flex
        xl:w-[50%]justify-center gap-6">
            <div className="flex bg-yellow-100 p-4 rounded-lg shadow border border-yellow-300 h-100 w-140 mr-8 ">
                <img src="https://kom-uploads.s3.amazonaws.com/store-1599/product-17624--1733167005-w900.jpg"
                    className="w-80 h-90 rounded"/>
                <div className="flex flex-col ml-4">
                    <h3 className="text-gray-700 font-bold mt-20">The MongolZ - Pro Jersey 2025</h3>
                    <p className="text-yellow-600 font-semibold mt-8">2XL ⬇</p>
                    <p className="text-gray-600 italic mt-8">Official Jersey.<p>Азийн size учраас нэг size томруулж аваарай.</p></p>
                    <div className="flex items-center justify-between mt-8">
                        <p className="text-yellow-700 font-bold text-[20px]">150'000₮</p>
                        <button className="flex items-center text-gray-700"><CiShoppingCart />Захиалах</button>
                    </div>
                </div>
            </div>
        
            <div className="flex bg-pink-100 p-4 rounded-lg shadow border border-pink-300 h-100 w-140">
                <img src="https://kom-uploads.s3.amazonaws.com/store-1599/product-63535--1736944491-w900.jpg" 
                    className="w-80 h-90 rounded"/>
                <div className="flex flex-col ml-4">
                    <h3 className="text-gray-700 font-bold mt-20">The MongolZ - Kids Jersey (No Sponsor Logos)</h3>
                    <p className="text-yellow-600 font-semibold mt-8">2XS ⬇</p>
                    <p className="text-gray-600 italic mt-8">Хүүхдэд зориулсан жижиг размерийн өмсгөл</p>
                    <div className="flex items-center justify-between mt-8">
                        <p className="text-yellow-700 font-bold text-[20px]">80’000₮</p>
                        <button className="flex items-center text-gray-700"><CiShoppingCart />Захиалах</button>
                    </div>
                </div>
            </div>
        </section>  
      </div>
      <Footer/>
    </div>
  )
}
