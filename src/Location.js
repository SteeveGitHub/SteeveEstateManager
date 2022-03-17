import React from "react";

function Location({location}) {
return(
    <div>
        <div>{location.street}</div>
        <div>CP : {location.zipCode}</div>
        <div>Dans la magnifique ville de {location.city}</div>
        <div>Venez découvrir la {location.country} !</div>
        
    </div>
)
}

export default Location;