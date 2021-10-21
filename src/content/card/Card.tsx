import React, { useState } from "react";
import { ADD_CART, ShopAPI } from "../../app/shopSlice";
import style from "../card/card.module.css"
import banana from "../../utility/imgs/banana.jpg"
import mela from "../../utility/imgs/mela.jpg"
import pera from "../../utility/imgs/pera.jpg"
import { useAppDispatch } from "../../app/hooks";
import { addSyntheticLeadingComment } from "typescript";

const Card: React.FC<ShopAPI> = ({ price, name }) => {
    const [count, setCount] = useState<number>(1)
    const dispatch = useAppDispatch()
    let imgs = ""


    function adding () {
        setCount(count+1)
        dispatch({type: "ADD_CART", payload: {name, price, quantity:count}})
    }


    //con lo switch non funzionava, quindi ho risolto così
    if (name === "Banana") {
        imgs = banana
    } if (name === "Mela") {
        imgs = mela
    } if (name === "Pera") {
        imgs = pera
    }

    return (
        <div className={style.container}>
            <img src={imgs} className={style.img} />
            <div className={style.scritta}>
                <div className={style.nome}>{name}</div>
                <div className={style.nome}>Price: ${price}</div>
                <div className={style.add} onClick={() => adding()}>Add to cart</div>
            </div>

        </div>
    )
}

export default Card;