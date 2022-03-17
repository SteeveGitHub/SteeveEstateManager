import data from "./data";
import Display from "./Display";
import React from "react";

function DisplayFlat() {
    return(
        <div>
            {
            data.map(x => <Display item={x}/>)
            }
        </div>
    )
}

export default DisplayFlat