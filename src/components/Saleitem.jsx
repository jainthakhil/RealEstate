import React from "react";
import { Link } from "react-router-dom";

function SaleItem(props){
    return(
        <div className="sale-itembox"  style={{flexDirection: props.direction}}>
            <div className="sale-imgbox">
                <img src={props.src} className="sale-img" />
            </div>
            <div className="sale-content">
                <h1>{props.title}
                    </h1>
                <h2>{props.bedroom}</h2>
                <p>{props.detail}</p>
                <h3>{props.price}</h3>
                <Link to="/agent">
                <button style={{display:props.display}} className="view-btn">VIEW THE SITE</button>

                </Link>
                

            </div>
        </div>
    )
}
export default SaleItem;