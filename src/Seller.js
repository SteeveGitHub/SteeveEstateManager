import React from "react";

function Seller({seller}) {

    return (
        <div>
        Identité du propriétaire : {seller.name} {seller.firstName} 
        <br></br>
        Adresse : {seller.address}
        <br></br>
        Numéro de téléphone : {seller.phoneNumber}
        </div>
    )
}

export default Seller;