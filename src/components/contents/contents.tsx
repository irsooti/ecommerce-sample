import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SET_ELEMENTS, ShopAPI } from "../../app/shopSlice";
import Card from "../../content/card/Card";
import style from './contents.module.css'

const Contents = () => {

    const {shop} = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch({ type: "SET_ELEMENTS"})

        return () => {
            dispatch({ type: "RESET_ELEMENTS"}) 
        }  
    },[])
    return (
<div className={style.container}>
    <div className={style.containerCard}>
        {shop.map((elem) => {
        return ( 
        <Card price={elem.price} name={elem.name}></Card>
        )
        
        })}
        </div>
</div>

    )
}

export default Contents;

