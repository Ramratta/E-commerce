import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Categories(props) {
  const [subMenu, SetMenu] = useState(false);
  const [subinnerMenu, SetinnerMenu] = useState(false);

  const trogllemenu = (key) => {
    SetMenu((prev) => (prev === key ? null : key));
  };

  const troglleinnermenu = (key) => {
    SetinnerMenu((prev) => (prev === key ? null : key));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="flex items-center justify-between p-3 text-[15px] font-medium ">
        Shop by Categories
        <IoCloseSharp
          className="cursor-pointer"
          onClick={() => props.openCategoriesPanel(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {/* ========Fashion================== */}
          <li className="flex w-full flex-col">
            <div className="flex justify-between items-center w-full px-2">
              <Link to="/" className="w-full">
                <Button className="w-full justify-between! text-black! normal-case!">
                  Fashion
                </Button>
              </Link>
              {subMenu === "Fashion" ? (
                <FaRegSquareMinus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Fashion")}
                />
              ) : (
                <FaRegSquarePlus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Fashion")}
                />
              )}
            </div>
            {subMenu === "Fashion" && (
              <ul className="top-full pl-4 w-full ">
                <li className="flex w-full flex-col">
                  <div className="flex justify-between items-center w-full px-2">
                    <Link to="/">
                      <Button className="w-full justify-between! text-black! normal-case!">
                        Mens-Clothing
                      </Button>
                    </Link>

                    {subinnerMenu === "Mens-Clothing" ? (
                      <FaRegSquareMinus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Mens-Clothing")}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Mens-Clothing")}
                      />
                    )}
                  </div>

                  {subinnerMenu === "Mens-Clothing" && (
                    <ul className="top-full pl-5 w-full ">
                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          T-shirt
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Shirt
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Jeans
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]! "
                        >
                          Kids-cloth
                        </Link>
                      </li>
                    </ul>
                  )}
                  <li className="flex items-center mb-1">
                    <Link
                      to="/"
                      className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                    >
                      Jewellary
                    </Link>
                  </li>
                </li>
              </ul>
            )}
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Boys
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Girls
              </Link>
            </li>
          </li>
        </ul>
        <ul className="w-full">
          <li className="flex w-full flex-col">
            <div className="flex justify-between items-center w-full px-2">
              <Link to="/" className="w-full">
                <Button className="w-full justify-between! text-black! normal-case!">
                  Electronic
                </Button>
              </Link>

              {subMenu === "Electronic" ? (
                <FaRegSquareMinus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Electronic")}
                />
              ) : (
                <FaRegSquarePlus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Electronic")}
                />
              )}
            </div>
            {subMenu === "Electronic" && (
              <ul className="top-full pl-4 w-full ">
                <li className="flex w-full flex-col">
                  <div className="flex justify-between items-center w-full px-2">
                    <Link to="/">
                      <Button className="w-full justify-between! text-black! normal-case!">
                        Gadgets
                      </Button>
                    </Link>

                    {subinnerMenu === "Gadgets" ? (
                      <FaRegSquareMinus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Gadgets")}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Gadgets")}
                      />
                    )}
                  </div>

                  {subinnerMenu === "Gadgets" && (
                    <ul className="top-full pl-5 w-full ">
                      <li className="flex items-center">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Laptop
                        </Link>
                      </li>

                      <li className="flex items-center">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]! mb-1"
                        >
                          E-renders
                        </Link>
                      </li>

                      <li className="flex items-center">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          digital Watches
                        </Link>
                      </li>

                      <li className="flex items-center">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Speaker & Home Accessories
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Cosmatics
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Outwears
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Furniture
              </Link>
            </li>
            <div className="flex justify-between items-center w-full px-2">
              <Link to="/" className="w-full">
                <Button className="w-full justify-between! text-black! normal-case!">
                  Accessories
                </Button>
              </Link>
              {subMenu === "Accessories" ? (
                <FaRegSquareMinus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Accessories")}
                />
              ) : (
                <FaRegSquarePlus
                  className="cursor-pointer"
                  onClick={() => trogllemenu("Accessories")}
                />
              )}
            </div>
            {subMenu === "Accessories" && (
              <ul className="top-full pl-4 w-full ">
                <li className="flex w-full flex-col">
                  <div className="flex justify-between items-center w-full px-2">
                    <Link to="/">
                      <Button className="w-full justify-between! text-black! normal-case!">
                        Watches & Bags
                      </Button>
                    </Link>

                    {subinnerMenu === "Watches-&-Bags" ? (
                      <FaRegSquareMinus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Watches-&-Bags")}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="cursor-pointer"
                        onClick={() => troglleinnermenu("Watches-&-Bags")}
                      />
                    )}
                  </div>

                  {subinnerMenu === "Watches-&-Bags" && (
                    <ul className="top-full pl-5 w-full ">
                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          BagPacks
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Handbags
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                        >
                          Smart Watches
                        </Link>
                      </li>

                      <li className="flex items-center mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start! normal-case! hover:text-[#ffa726]! "
                        >
                          Chronograph Watches
                        </Link>
                      </li>
                    </ul>
                  )}
                  <li className="flex items-center mb-1">
                    <Link
                      to="/"
                      className="w-full justify-start! normal-case! hover:text-[#ffa726]!"
                    >
                      Jewellary
                    </Link>
                  </li>
                </li>
              </ul>
            )}
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Ladies-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Xbox Controller
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! py-2 px-4"
              >
                Sunglasses
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]! px-4 py-2"
              >
                Mens-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]!  px-4 py-2"
              >
                Kids-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]!  px-4 py-2"
              >
                Cricket-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]!  px-4 py-2"
              >
                Kabbadi-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]!  px-4 py-2"
              >
                Football-Accessories
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/"
                className="w-full justify-start! normal-case! hover:text-[#ffa726]!  px-4 py-2"
              >
                Games-Accessories
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={props.opencart}
        onClose={() => props.openCategoriesPanel(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Categories;
