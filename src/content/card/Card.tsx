import React, { useState } from "react";
import { shopAPI } from "../../app/shopSlice";
import style from "../card/card.module.css"
import banana from "../../utility/imgs/banana.jpg"
import mela from "../../utility/imgs/mela.jpg"
import pera from "../../utility/imgs/pera.jpg"

const Card: React.FC<shopAPI> = ({ price, name }) => {
    const [images, setImages] = useState<string>()
    let imgs = ""

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
                <div className={style.prezzo}>{price}</div>
                <div className={style.add} onClick={() => console.log(imgs)}>Add to cart</div>
            </div>

        </div>
    )
}

export default Card;