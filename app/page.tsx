"use client";
import {  useEffect, useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Works from "./components/works";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme="dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme="";
    }
  }, [isDarkMode]);
  return (
    <div className="font-Outfit">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header  />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Works isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};

export default Home;
