import React from "react";
import Hero from "./Hero";
import Rentpage from "./Rentpage"; 
import Salepage from "./Salepage";
import Testimonial from "./Testimonial";

function Home(){
    return(
        <>
        <Hero />
        <Salepage display = "none" />
        <Rentpage display = "none" bgColor = "#fff" />
        <Testimonial />

        </>
    )
}
export default Home