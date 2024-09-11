import React,{useState, useEffect} from "react";
import PersonButton from "./person-button";
function PersonPicker ({personsArr}) {

    
    
    return (
        <div className="flex flex-row p-10">
            {personsArr.map((person,index)=> {
                return (
                    <PersonButton 
                        key={index}
                        picture={person.picture.large}
                    />
                )
                
            })}
        </div>
    )
}

export default PersonPicker