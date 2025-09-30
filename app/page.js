'use client'
import About from "./components/About";
import Github from "./components/Github";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Github />
     <Services />

    </>
  );
}
