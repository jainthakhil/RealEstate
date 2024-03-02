import React from "react";
import SaleItem from "./Saleitem";
import saledata from "../Saledata";
import { Link } from "react-router-dom";

function Salepage({display}){
    return(
        <div className="sale-box">
            <h1>PROPERTIES FOR SALE</h1>

            <div className="sale-mainbox">
            {saledata.map(newSaleItem => (
                <Link to="/sale" className="custom-link">
                    <SaleItem
                        key={newSaleItem.id}
                        direction={newSaleItem.direction}
                        src={newSaleItem.src}
                        title={newSaleItem.title}
                        bedroom={newSaleItem.bedroom}
                        detail={newSaleItem.detail}
                        price={newSaleItem.price}
                        display={display}
                    />
                </Link>
            ))}

            </div>

                        

            
            

        </div>
    )
} 
export default Salepage;