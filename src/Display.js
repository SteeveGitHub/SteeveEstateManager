import data from "./data.js";

function Display({name, price, pictures, seller}

    )
    {

    return (<div>

    <div>{name}</div>
    <div>{price}</div>
    <div>{pictures}</div>
    <div>{seller}</div>

    </div>
    
    )
}


export default Display;