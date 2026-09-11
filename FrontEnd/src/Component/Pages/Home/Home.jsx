import React from "react";
import { useState, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import HomeCatSlider from "./HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../AdsBannerSlider/AdsBannerSlider";
import Productitem from "../../Product/Productitem";
import { getProducts } from "../../../api/ProductApi";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Products from "../../Product/Products";
import ProductByTab, { NewProduct } from "../Data/Product";
import Footer from "../Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const formattedProducts = data.map((product) => ({
          title: product.title,
          description: product.description,
          main: product.image,
          hover: product.image,
          discount: product.discount,
          instock: product.stock > 0,
          rating: product.rating,
          mrp: product.mrp > 0,
          Price: product.price < product.mrp,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchProducts();
  }, []);

  const tabKeys = [
    "FASHION",
    "ELECTRONICS",
    "BAGS",
    "FOOTWEAR",
    "GROCERIES",
    "BEAUTY",
    "WELLNESS",
    "JEWELLERY",
  ];

  return (
    <>
      <div className=" relative z-0 ">
        <HomeSlider />
        <HomeCatSlider />

        <section className=" px-5 bg-white ">
          <div className=" flex justify-between ">
            <div className=" text-[20px] font-semibold ">
              Popular Products
              <p className="text-[14px] font-extralight">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className=" w-[60%] ">
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                value={activeTab}
                onChange={(event, newValue) => setActiveTab(newValue)}
              >
                <Tab className="tab" label="Fashion" />
                <Tab className="tab" label="Electronics" />
                <Tab className="tab" label="Bags" />
                <Tab className="tab" label="Footwear" />
                <Tab className="tab" label="Groceries" />
                <Tab className="tab" label="Beauty" />
                <Tab className="tab" label="Welleness" />
                <Tab className="tab" label="Jewellery" />
              </Tabs>
            </div>
          </div>
          <div>
            <Products items={5} products={ProductByTab[tabKeys[activeTab]]} />
          </div>
        </section>

        <section className=" py-5 bg-white">
          <div className="border-2 border-[#ff5252] mx-30 flex items-center">
            <div className=" flex w-[30%] justify-evenly items-center gap-2">
              <div className=" p-4">
                <FaShippingFast size={60} />
              </div>
              <div className="uppercase flex-1 text-2xl font-medium">
                free shipping
              </div>
            </div>
            <div className="flex justify-evenly w-[50%] border-l-2 border-r-2 border-gray-400 font-medium ">
              <div>Free Delivery Now First Order and Over $200</div>
            </div>
            <div className="flex justify-center items-center flex-1 text-2xl font-medium uppercase">
              -only $200
            </div>
            <div className=""></div>
          </div>
        </section>
        <div className="bg-white flex justify-between px-5 pb-3">
          <div className=" text-[20px] font-semibold ">
            NEW PRODUCTS
            <p className="text-[14px] font-extralight">
              New products with updated stocks.
            </p>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap px-3 bg-white pb-5">
          {NewProduct.map((product, index) => (
            <Productitem key={index} product={product} />
          ))}
        </div>
        <AdsBannerSlider item={4} />

        <section className=" px-5 bg-white py-5">
          <div className=" flex justify-between ">
            <div className=" text-[20px] font-semibold ">
              <p className="uppercase">featured products</p>
              <p className="text-[14px] font-extralight">
                Do not miss the current offers until the end of March.
              </p>
            </div>
          </div>
          <div>
            <Products items={5} products={ProductByTab[tabKeys[activeTab]]} />
          </div>
        </section>
        <AdsBannerSlider item={3} shownavigation={false} bannerCount={3} />
        <section className=" px-5 bg-white py-5">
          <div className=" flex justify-between ">
            <div className=" text-[20px] font-semibold ">
              <p className="uppercase">Groceries</p>
              <p className="text-[14px] font-extralight">
                Do not miss the current offers until the end of March.
              </p>
            </div>
          </div>
          <div>
            <Products items={5} products={ProductByTab[tabKeys[activeTab]]} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
