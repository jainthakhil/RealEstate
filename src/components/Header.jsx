import React from "react";
import {NavLink, Link} from "react-router-dom";


function Header(){

    return (
            <div className="header">
                <div className="logo">
                <Link to="" className="logo-link">
                    <img src="/images/house.gif" className="logo-img" alt="logo"/>
                    <p className="brand-name">XTATE PROPERTIES</p>
                </Link>
                    
                </div>
                <div className="nav-btns">

                    <NavLink to="/" className="header-link" activeClassName="active">
                            HOME
                    </NavLink>
                    <NavLink to="/sale" className="header-link" activeClassName="active">
                            SALES
                    </NavLink>
                    <NavLink to="/rent" className="header-link" activeClassName="active">
                            RENTALS
                    </NavLink>
                    <NavLink to="/agent" className="header-link" activeClassName="active">
                            AGENTS
                    </NavLink>
                    <NavLink to="/contact" className="header-link" activeClassName="active">
                            CONTACT
                    </NavLink>

                </div>

            </div>
        
    )
}
export default Header;
