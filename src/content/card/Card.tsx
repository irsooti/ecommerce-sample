import React, { useEffect, useState } from "react";
import { ShopAPI } from "../../app/shopSlice";
import style from "../card/card.module.css"
import banana from "../../utility/imgs/banana.jpg"
import mela from "../../utility/imgs/mela.jpg"
import pera from "../../utility/imgs/pera.jpg"
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const {container, img, scritta, nome, prezzo, add, link, linkRm} = style

const Card: React.FC<ShopAPI> = ({ price, name }) => {
    const { added } = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    let imgs = ""

    if (name === "Banana") {
        imgs = banana
    } if (name === "Mela") {
        imgs = mela
    } if (name === "Pera") {
        imgs = pera
    }

    let index = added.findIndex((el)=>el.name===name)
    
    return (
        <div className={container}>
            <img src={imgs} className={img} />
            <div className={scritta}>
                <div className={nome}>{name}</div>
                <div className={prezzo}>Price: ${price}</div>
                {(index>=0)? 
                    (added[index].quantity>0)?<div className={linkRm} onClick={() => dispatch({ type: "RM_FROM_CART", payload: { name, price } })}>Remove</div>:
                    <div className={link} onClick={() => dispatch({ type: "ADD_CART", payload: { name, price, quantity: 1 } })}>Add to cart</div>
               :<div className={link} onClick={() => dispatch({ type: "ADD_CART", payload: { name, price, quantity: 1 } })}>Add to cart</div>
            }
 </div> 

        </div>
    )
}

export default Card;