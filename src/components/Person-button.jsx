import React,{useState} from "react";

function PersonButton ({picture}) {

    return(
        <div className="rounded-full">
            <img className="rounded-full" src={picture} />
        </div>
    )
}

export default PersonButton