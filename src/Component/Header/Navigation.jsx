import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Categories from "./Categories";

function Navigation() {
  const [opencart, setOpenCart] = useState(false);

  const openCategoriesPanel = (value) => {
    setOpenCart(value);
  };

  return (
    <>
      <nav className=" py-2 bg-white ">
        <div className="flex justify-between w-[85%] m-auto">
          <div className="1 flex w-[25%]">
            <Button
              className="text-black! gap-2 w-full!"
              onClick={() => openCategoriesPanel(true)}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className=" text-[18px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="2 w-[75%] py-2">
            <ul className=" link1">
              <li className="relative group/Home">
                <Link to="/">
                  <Button className="link2">Home</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Home:opacity-100 group-hover/Home:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/Featured w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Featured
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Featured:opacity-100 group-hover/Featured:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                New Arrivals
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Best Sellers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Trending
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Featured Products
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Recommended
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Collections w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Collections
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Collections:opacity-100 group-hover/Collections:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Summer Collection
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Winter Collection
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Festive Collection
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Premium Collection
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                New Collection
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Deals w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Deals
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Deals:opacity-100 group-hover/Deals:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Today's Deals
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Flash Sale
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Special Offers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Clearance
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Mega Sale
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Popular w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Popular
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Popular:opacity-100 group-hover/Popular:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Most Viewed
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Top Viewed
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Most Purchased
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Customer Favorites
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Trending Products
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Offers w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Offers
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Offers:opacity-100 group-hover/Offers:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Under ₹499
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Under ₹999
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Limited Offers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Buy 1 Get 1
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Discount Zone
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/Fashion">
                <Link to=" / ">
                  <Button className="link2">Fashion</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Fashion:opacity-100 group-hover/Fashion:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/Men w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Men
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Men:opacity-100 group-hover/Men:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                T-shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Shirts
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Trousers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Men's Footwear
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Womens w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Women
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Womens:opacity-100 group-hover/Womens:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Dresses
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Tops
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Ethnic Wear
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Women's Footwear
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Baby
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Rompers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bodysuits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Baby Sets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Baby Dresses
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Baby Accessories
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Girls
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Dresses
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Frocks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Tops
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Skirts
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Ethic Wear
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Boys
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                T-shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Shirts
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Shorts
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Jackets
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/Electronics">
                <Link to="/">
                  <Button className="link2">Electronics</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Electronics:opacity-100 group-hover/Electronics:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/Men w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Mobiles
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Men:opacity-100 group-hover/Men:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                SmartPhones
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Feature Phones
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Mobile Cases
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Chargers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Power Banks
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Womens w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Computers
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Womens:opacity-100 group-hover/Womens:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Laptops
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Desktops
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Moniters
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Keyboards
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Mouses
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Audio
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                HeadPhones
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Earsbuds
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bluetooth Speakers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Soundbars
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                MicroPhones
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Cameras
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                DSLR Cameras
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Mirrorless Cameras
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Security Cameras
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Camera Accessories
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Security Cameras
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Smart Devices
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Smart Watches
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Smart Tvs
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Streaming Speakers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Streaming Devices
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Smart Homes Devices
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group/Bags">
                <Link to="/">
                  <Button className="link2">Bags</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Women's Bags
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Sling Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Handbags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Shoulder Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Tote Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Clutches
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Men's Bags
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Laptops Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Backpacks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sling Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Travel Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Wallets
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Kid's Bags
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                School Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Backpacks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Lunch Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Pencil Cases
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Kids Sling Bags
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Travel Bags
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Suitcases
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Duffel Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Trolley Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Travel Backpacks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cabin Bags
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Accessories
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Wallets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Card Holders
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bag Charms
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bag Straps
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Organizers
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" relative group/Bags">
                <Link to="/">
                  <Button className="link2">Footwear</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Men
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Sneakers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Formal Shoes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Loafers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sandals
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Boots
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Women
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Heels
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Flats
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sneakers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sandals
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Boots
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Boys
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Sneakers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                School Shoes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sport Shoes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Slippers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Kids Sling Bags
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Travel Bags
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Suitcases
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Duffel Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Trolley Bags
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Travel Backpacks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cabin Bags
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Accessories
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Wallets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Card Holders
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bag Charms
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bag Straps
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Organizers
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" relative group/Bags">
                <Link to="/">
                  <Button className="link2">Groceries</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Fruits & Vegetables
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Fresh Fruits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Fresh Vegetables
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Organic Fruits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Organic Vegetable
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cut Vegetables
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Dairy & Eggs
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Milk
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cheese
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Butter
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Curd
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Eggs
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Staples
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Rice
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Wheat & Flour
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Pulses
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cooking Oil
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Spices
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Snacks
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Biscuits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Chips
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Chocolates
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Namkeen
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Dry Fruits
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Beveages
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Tea
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Coffee
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Juices
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Soft Drinks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Energy Drinks
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" relative group/Bags">
                <Link to="/">
                  <Button className="link2">Beauty</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Makeup
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Face Makeup
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Eye Makeup
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Lip Makeup
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Nail Makeup
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Makeup kits
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Skin Care
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Face Wash
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Moisturizers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sunscreen
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Face Serums
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Face mask
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Hair Care
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Shampoo
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Conditioner
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Hair Oil
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Hair Serum
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Hair Styling
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Bath & Body
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Body Wash
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Soaps
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Body Lotion
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Scrubs
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bath Accessories
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Fragrances
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] left-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Perfumes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Deodorants
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Body Mists
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Attairs
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Fragrances sets
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" relative group/Bags">
                <Link to="/">
                  <Button className="link2">Welleness</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Fitness
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Yoga
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Dumbbells
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Resistance Bands
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Exercise Mats
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Fitness Accessories
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Personal Care
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Oral Care
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bath Care
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Personal Hygine
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Grooming
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Feminine Care
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Health
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                First Aid
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Health Devices
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Thermometers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Support & Braces
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Wellness Products
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Nutrition
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Protein Foods
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Healthy Snacks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Dry Fruits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Herbal Products
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Nutrition Drinks
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Relaxation
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Message Products
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Aromatherapy
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Sleep Accessories
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Meditation Products
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Relaxation Accessories
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" relative group/Bags">
                <Link to="/">
                  <Button className="link2">Jewellery</Button>
                </Link>
                <div className="absolute flex justify-start items-center top-full min-w-40 bg-white shadow-md opacity-0 invisible  group-hover/Bags:opacity-100 group-hover/Bags:visible z-50">
                  <ul className="flex justify-center items-center flex-col w-full ">
                    <li className="relative group/WomensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Women's Jewellery
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/WomensBags:opacity-100 group-hover/WomensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Earrings
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Necklaces
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Rings
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bracelets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Anklets
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/MensBags w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Men's Jewellery
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/MensBags:opacity-100 group-hover/MensBags:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Chains
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Rings
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bracelets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cufflinks
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Pendants
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Kids w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Kid's Jewellery
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Kids:opacity-100 group-hover/Kids:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Earrings
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Bracelets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Rings
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Anklets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Hair Accessories
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Girls w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Fshion Jewellery
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Girls:opacity-100 group-hover/Girls:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Statement Jewellery
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Articial Jewellery
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Jewellery Sets
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Charm Jewellery
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Party Jewellery
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" relative group/Boys w-full">
                      <Link to=" / ">
                        <Button className="hover:text-[#ffa726]! text-black! w-full!">
                          Jewellery Accessories
                        </Button>
                      </Link>
                      <div className="absolute flex justify-start items-center top-[0%] right-full min-w-70 bg-white shadow-md opacity-0 invisible group-hover/Boys:opacity-100 group-hover/Boys:visible w-full">
                        <ul className="flex justify-center items-center flex-col w-full">
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className=" hover:text-[#ffa726]! text-black! w-full!">
                                Jewellery Boxes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Organizers
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Cleaning Kits
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Gift Boxes
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full">
                            <Link to=" / ">
                              <Button className="hover:text-[#ffa726]! text-black! w-full!">
                                Strorage Cases
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Categories
        openCategoriesPanel={openCategoriesPanel}
        opencart={opencart}
      />
    </>
  );
}

export default Navigation;
