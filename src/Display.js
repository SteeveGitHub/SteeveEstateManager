import Name from "./Name";
import Seller from "./Seller";
import Location from "./Location";
// import Pictures from "./Pictures";
import Price from "./Price";
import Rate from "./Rate";
import React from "react";
import { Link } from "react-router-dom";

function Display({item}

    )
    {

return (
   
    <div key={item.id}>
        <Name name={item.name}/>
        <Price price={item.price}/>
        <Seller seller={item.seller}/>
        <Location location={item.location}/>
        {/* <Pictures pictures={item.pictures}/> */}
        <Rate rate={item.rate}/>
        <Link to={"/list/"+item.id}>Plus de détails</Link>     
    </div>
    
    )
}


export default Display;