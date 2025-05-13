"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Home() {
  const [opacity, setOpacity] = useState(0);

  // Fixing the useEffect hook
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1); // Set opacity to 1 after 500ms
    }, 300);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex w-full bg-white py-4 px-4 justify-center">
        <img
          src="/mongolzlogo.jpg"
          alt="Transition Image"
          className={`
            w-[100%]
            rounded-md
            transition-opacity
            duration-[2000ms]
            ease-in-out
            md:w-[50%]
            lg:w-[80%]
            xl:w-[50%]
          `}
          style={{ opacity: opacity }} 
        />
      </div>

      <div className="flex flex-col items-center py-6">
        <span className="text-gray-600 text-[30px] font-bold px-6">
          Бүх бараа
        </span>
        <hr className="w-full m-auto max-w-[calc(100%-60px)] border-t border-gray-200 mt-2" />
        
        <section className="flex w-full px-8 py-8 justify-center md:w-[50%] lg:w-[80%] xl:w-[50%] gap-6">
          {/* Product 1 */}
          <div className="flex bg-yellow-100 p-4 rounded-lg shadow border border-yellow-300 h-[400px] w-[350px] mr-8">
            <img
              src="https://kom-uploads.s3.amazonaws.com/store-1599/product-17624--1733167005-w900.jpg"
              className="w-80 h-90 rounded"
              alt="Pro Jersey 2025"
            />
            <div className="flex flex-col ml-4">
              <h3 className="text-gray-700 font-bold mt-4">The MongolZ - Pro Jersey 2025</h3>
              <p className="text-yellow-600 font-semibold mt-4">2XL ⬇</p>
              <p className="text-gray-600 italic mt-4">
                Official Jersey. <span>Азийн size учраас нэг size томруулж аваарай.</span>
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-yellow-700 font-bold text-[20px]">150'000₮</p>
                <button className="flex items-center text-gray-700">
                  <CiShoppingCart /> Захиалах
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex bg-pink-100 p-4 rounded-lg shadow border border-pink-300 h-[400px] w-[350px]">
            <img
              src="https://kom-uploads.s3.amazonaws.com/store-1599/product-63535--1736944491-w900.jpg"
              className="w-80 h-90 rounded"
              alt="Kids Jersey"
            />
            <div className="flex flex-col ml-4">
              <h3 className="text-gray-700 font-bold mt-4">
                The MongolZ - Kids Jersey (No Sponsor Logos)
              </h3>
              <p className="text-yellow-600 font-semibold mt-4">2XS ⬇</p>
              <p className="text-gray-600 italic mt-4">Хүүхдэд зориулсан жижиг размерийн өмсгөл</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-yellow-700 font-bold text-[20px]">80’000₮</p>
                <button className="flex items-center text-gray-700">
                  <CiShoppingCart /> Захиалах
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
