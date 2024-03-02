import React from "react";
import RentItem from "./Rentitem";
import { Link } from "react-router-dom";
import rentdata from "../Rentdata";

function Rentpage({display, bgColor}){
    return(
        <div className="rent-box" style={{backgroundColor:bgColor}}>
        <div className="rent-heading">
            <h1>LATEST RENTAL PROPERTIES</h1>
        </div>
        <div className="rent-mainbox">

            {rentdata.map(newRentitem => (
                <Link to="/rent" className="custom-link">
                <RentItem 
                        id = {newRentitem.key}
                        src = {newRentitem.src}
                        bedroom = {newRentitem.bedroom}
                        title = {newRentitem.title}
                        detail = {newRentitem.detail}
                        price = {newRentitem.price}
                        display = {display}
                />
                </Link>
            ))}


            
        </div>
    </div>

        
    )
} 
export default Rentpage;