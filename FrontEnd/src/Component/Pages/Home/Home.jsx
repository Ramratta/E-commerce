import React from "react";
import { useState, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import HomeCatSlider from "./HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../AdsBannerSlider/AdsBannerSlider";
import Productitem from "../../Product/Productitem";
import {
  getProductsByType,
  getFeaturedProducts,
} from "../../../api/ProductApi";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Products from "../../Product/Products";
import Footer from "../Footer";

function Home() {
  const [tabProducts, setTabProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [groceries, setGroceries] = useState([]);

  const formatProducts = (data) =>
    data.map((product) => ({
      title: product.title,
      description: product.description,

      // MongoDB stores these as arrays
      main: Array.isArray(product.main) ? product.main[0] : product.main,
      hover: Array.isArray(product.hover) ? product.hover[0] : product.hover,

      discount: product.discount,
      instock: product.stock > 0,
      rating: product.rating,
      mrp: product.mrp > 0 ? product.mrp : "",
      Price: product.price,
      type: product.type,
    }));

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getFeaturedProducts();
        setFeaturedProducts(formatProducts(data));
      } catch (errr) {
        console.log("Error fetching featured products:", errr);
      }
    };

    const fetchgroceriesProducts = async () => {
      try {
        const data = await getProductsByType("Groceries");
        setGroceries(formatProducts(data));
      } catch (err) {
        console.log("Error fetching Groceriesproducts:", err);
      }
    };

    const fetchNewProducts = async () => {
      try {
        const data = await getProductsByType("newProducts");
        setProducts(formatProducts(data));
      } catch (errr) {
        console.log("Error fetching newProducts: ", errr);
      }
    };
    fetchgroceriesProducts();
    fetchNewProducts();
    fetchFeaturedProducts();
  }, []);

  useEffect(() => {
    const fetchTabProducts = async () => {
      try {
        const data = await getProductsByType(tabKeys[activeTab]);
        setTabProducts(formatProducts(data));
      } catch (err) {
        console.log("Error fetching tab products:", err);
      }
    };
    fetchTabProducts();
  }, [activeTab]);

  const tabKeys = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Welleness",
    "Jewellery",
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
            <Products items={5} products={tabProducts} />
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
        <div className="grid grid-cols-5 gap-8 bg-white pb-5 px-3">
          {products.map((product, index) => (
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
            <Products items={5} products={featuredProducts} />
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
            <Products items={5} products={groceries} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
