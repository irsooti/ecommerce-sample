import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SET_ELEMENTS, shopAPI } from "../../app/shopSlice";
import Card from "../../content/card/Card";
import style from './contents.module.css'

const Contents = () => {

    const {shop} = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    console.log(shop)


    useEffect(()=>{
        dispatch({ type: "SET_ELEMENTS"})

        return () => {
            dispatch({ type: "RESET_ELEMENTS"}) 
        }  
    },[])
    return (
<div className={style.container}> 
    <div>{shop.map((elem, index) => {
        return ( 
            <div key={index} className={style.container_cards}>
                {elem.map((elem1, index1) => {
                    return (
                        <Card price={elem1.price} name={elem1.name}></Card>
                    )
                })}
                </div>
        )
        
        })}</div>
</div>

    )
}

export default Contents;

