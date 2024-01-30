import React from "react"

export const orderProper = (props) => {
 
 const{id , name , price} = props.data;
    return (
        <div className="orderItem">
            <main className="description">
                <p>
                    <b>{name}</b>
                </p>

                <p>
                    <b>{price}</b>
                </p>
            </main>
        </div>
    )
}