import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ShopAPI } from "../../app/shopSlice";
import style from './cart.module.css'

const Cart = () => {
    const { added } = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    let amount = 0


    if (added !== []) {
        added.map((elem) => {
            amount += elem.price
        })
    }


    return (
        <div className={style.container}>
            <div className={style.Title}>Carrello</div>
            <div className={style.elemets}>
                {added.map((elem, index) => {
                    return (
                        <div className={style.containerElement} key={index}>
                            <div>{elem.name}:</div>
                            <div>quantity: {elem.quantity}</div>
                            <div>${elem.price * elem.quantity}</div>
                        </div>
                    )
                })}
            </div>
            <div className={style.containerBottom}>
                <div className={style.containerElement}>
                    <div className={style.title2}>Totale: </div>
                    <div className={style.amount}>${amount}</div>
                </div>
                {(amount !== 0) ? <div onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</div> : null}
            </div>

        </div>


    )
}

export default Cart;