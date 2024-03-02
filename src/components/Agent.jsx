import React from "react";
import Agentitem from "./Agentitem";
import Agentdata from "../Agentdata";

function Agent(){
    return(
    <div className="agent-box">
        <div className="agent-heading">
        <h1>OUR AGENTS</h1>
        </div>

        <div className="agent-mainbox">
        {Agentdata.map(newAgentitem =>(
            <Agentitem
            src={newAgentitem.src}
            name={newAgentitem.name}
            department={newAgentitem.department}
            email={newAgentitem.email}
            tel={newAgentitem.tel}
             />


        ))}
        </div>


    </div>
    )
}

export default Agent