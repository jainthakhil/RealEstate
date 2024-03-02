import React from "react";
import { Link } from "react-router-dom";

function RentItem(props){
    return(
        <div className="rent-itembox">
            <div className="rent-imgbox">
                <img src={props.src} className="rent-img" />
            </div>
            <div className="rent-content">
                <h2>{props.bedroom}</h2>
                <h1>{props.title}</h1>
                <p>{props.detail}</p>
                <h3>{props.price}</h3>
                <Link to="/agent">
                <button style={{display:props.display}} className="view-btn">VIEW THE SITE</button>

                </Link>

            </div>
        </div>
    )
}
export default RentItem;