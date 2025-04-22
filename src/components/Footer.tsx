import React from "react";
import Image from "next/image";
export default function Footer() {
    return (
    <div>
        <section className="w-full flex py-14 ">
            <hr className="w-full  border-t border-gray-200"/>
         </section> 
         <div className="grid  gap-8  grid-cols-1 lg:grid-cols-3 ">
         <div className="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img 
                      src="https://d2sucgbhjy7j1n.cloudfront.net/common/icons/truck.gif" 
                      alt="Захиалга хүргэх"
                      className="w-24 mx-auto  pt-2 sm:pt-4  x-icon"/>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">Захиалга хүргэх</h3>
                    <p className="mt-2 text-sm text-gray-500 whitespace-pre-line">Таны захиалга баталгаажсаны дараа бид 
                        <p>3-5 хоногийн дотор хүргэнэ.</p></p>
                  </div>
                </div>
         <div className="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img 
                      className="w-20 mx-auto  pt-6 sm:pt-8  x-icon" 
                      src="https://d2sucgbhjy7j1n.cloudfront.net/common/icons/payment.gif" 
                      alt="Төлбөрийн нөхцөл"/>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">Төлбөрийн нөхцөл</h3>
                    <p className="mt-2 text-sm text-gray-500">Төлбөрийг бүрэн шилжүүлснээр захиалга 
                        <p>баталгаажна. Та гүйлгээний утга дээр захиалгын код,</p> 
                        <p>утасны дугаараа бичээрэй.</p></p>
                  </div>
                </div>
                <div className="text-center sm:flex sm:text-left lg:block lg:text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img 
                      className="w-20 mx-auto  pt-6 sm:pt-8  x-icon" 
                      src="https://d2sucgbhjy7j1n.cloudfront.net/common/icons/box.gif" 
                      alt="Хүргэлтийн нөхцөл"/>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">Хүргэлтийн нөхцөл</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        3 ба түүнээс дээш бүтээгдэхүүнд хүргэлт ҮНЭГҮЙ.
                        <p>Бусад тохиолдолд хүргэлтийн төлбөр 6’000₮.</p>
                    </p>
                  </div>
                </div>
                </div>
                <section className="w-full flex py-14 ">
                <hr className="w-full  border-t border-gray-200"/>
             </section>
             <div className="flex flex-col justify-center items-center w-full ">
                <span className="text-gray-600 text-[18px]">
                    Утас: 72444181
                </span>
                <span className="text-gray-500 text-[18px] my-8"> 
                    © 2022-2025 Дэлгүүрийн программыг 
                    <span className="text-gray-600">kom.mn.</span>
                </span>
              </div>
    </div>

    );
}