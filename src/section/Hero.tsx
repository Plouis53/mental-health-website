"use client";

import React, { useEffect } from "react";
import { heroSlides } from "@/data/data";
// import "./hero.css";

// Import AOS
import AOS from "aos";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  return <h1>Welcome to Calm Play</h1>;
}
