"use client";
// import { CarouselDemo } from "@/components/CarouselDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { Products } from "@/product";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const productHandler = async (id: number) => {
    const product = Products.find((product) => product.id === id);
    if (!product) return;

    try {
      const response = await axios.post("/api/product", product, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.message); // Display the result message
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Path to your data.json file in the public directory
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCartProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {cartProduct.length >= 0 && <Header count={cartProduct.length} />}
      <HeroSection />
      {/* <CarouselDemo /> */}
      <Slider />
      <div className="flex py-4 px-8 flex-wrap bg-slate-100">
        {" "}
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            handleClick={productHandler}
            title={product.title}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Info />
      <Footer />
    </>
  );
}
