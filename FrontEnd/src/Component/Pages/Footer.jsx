import React from "react";
import {
  LuShirt,
  LuTruck,
  LuBadgePercent,
  LuBadgeDollarSign,
} from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className=" flex w-full bg-[#553295]">
        <div className="w-[50%] text-white my-15 px-3.75 mx-35">
          <p className="text-[18px] font-semibold w-full mb-1 py-1">
            $20 discount for your first order
          </p>
          <p className="text-[40px] font-bold w-full mb-1 py-1">
            Join our newsletter and get...
          </p>
          <p className="font-bold w-full mb-3 py-1 pr-20">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>
          <div className="flex justify-between text-black bg-white mr-20 h-12 rounded-xl px-3">
            <div className="flex items-center gap-1 flex-1">
              <FaRegEnvelope size={30} color="#C1C1C1" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="border-none outline-none flex-1 mx-2 pl-2 rounded-2xl "
              />
            </div>
            <button
              type="submit"
              className="bg-[#553295] my-1 px-2 rounded-xl cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-[50%] ">
          <img
            src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png"
            alt="RightImage"
            className="w-full"
          />
        </div>
      </section>
      <div className="w-full px-20 flex flex-col gap-5 mt-5 py-3">
        <div className="border-b border-[#ccc4c4] flex justify-evenly items-center pb-7 pt-4">
          <div className="flex items-center text-[14px] font-semibold gap-2 border-r p-[10px_20px_10px_40px] border-[#ccc4c4]">
            <LuShirt size={26} />
            <p>Everyday fresh products</p>
          </div>
          <div className="flex items-center text-[14px] font-semibold gap-2 border-r p-[10px_20px_10px_40px] border-[#ccc4c4]">
            <LuTruck size={26} />
            <p>Free delivery for order over $70</p>
          </div>
          <div className="flex items-center text-[14px] font-semibold gap-2 border-r p-[10px_20px_10px_40px] border-[#ccc4c4]">
            <LuBadgePercent size={26} />
            <p>Daily Mega Discounts</p>
          </div>
          <div className="flex items-center text-[14px] font-semibold gap-2 border-r p-[10px_20px_10px_40px] border-[#ccc4c4]">
            <LuBadgeDollarSign size={26} />
            <p>Best price on the market</p>
          </div>
        </div>
        <div className="px-8 py-8">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h3 className="text-[20px] font-semibold text-[#7446c8] mb-7">
                FRUIT & VEGETABLES
              </h3>

              <div className="space-y-5">
                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Vegetables
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Herbs & Seasonings
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Fruits
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Cuts & Sprouts
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Exotic Fruits & Veggies
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Packaged Produce
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-[#7446c8] mb-7">
                BREAKFAST & DAIRY
              </h3>

              <div className="space-y-5">
                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Vegetables
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Herbs & Seasonings
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Fruits
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Cuts & Sprouts
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Exotic Fruits & Veggies
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Packaged Produce
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-[#7446c8] mb-7">
                MEAT & SEAFOOD
              </h3>

              <div className="space-y-5">
                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Vegetables
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Herbs & Seasonings
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Fresh Fruits
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Cuts & Sprouts
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Exotic Fruits & Veggies
                </p>

                <p className="text-[15px] text-[#38527a] cursor-pointer">
                  Packaged Produce
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5e5e5] px-8 py-6 flex items-center justify-between">
          <p className="text-[16px] text-[#222]">
            Copyright 2024. All rights reserved
          </p>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-[#d5d5d5] flex items-center justify-center cursor-pointer hover:text-[#7446c8]">
              <FaFacebookF size={18} />
            </div>

            <div className="w-11 h-11 rounded-full border border-[#d5d5d5] flex items-center justify-center cursor-pointer hover:text-[#7446c8]">
              <FaTwitter size={18} />
            </div>

            <div className="w-11 h-11 rounded-full border border-[#d5d5d5] flex items-center justify-center cursor-pointer hover:text-[#7446c8]">
              <FaInstagram size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
