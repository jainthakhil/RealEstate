import React from "react";

function Agentitem(props){
    return(
        <div className="agent-itembox">
        <div className="agent-imgbox">
            <img src={props.src} className="agent-img" />
        </div>
        <div className="agent-content">
            <h1>{props.name}</h1>
            <h2>{props.department}</h2>
            <p>Email: {props.email}</p>
            <p>Tel: {props.tel}</p>

        </div>
    </div>
    )
    

}

export default Agentitem
