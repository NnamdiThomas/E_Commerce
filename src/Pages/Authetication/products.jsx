import React from "react"

export const Products = (props) => {

    const{name, ProductSize, ProductAmount, productType, ManufacturingDate} = props.data;
    return (
        <div className="description">
            <main className="productDescription">
                <p>
                    <b>{name}</b>
                </p>

                <p>
                    <b>{ProductSize}</b>
                </p>
                <p>
                    <b>{productType}</b>
                </p>
                <p>
                    <b>{ProductAmount}</b>
                </p>
                <p>
                    <b>{ManufacturingDate}</b>
                </p>
   </main>
   </div>
   )
}