import { createSlice, current } from "@reduxjs/toolkit"
import { addSyntheticLeadingComment } from "typescript";

export interface ShopAPI {
    price: number,
    name: string
}

export interface Added {
    price: number,
    name: string,
    quantity: number
}

interface initialState {
    shop: ShopAPI[],
    added: Added[],
}


const initial: initialState = {
    shop: [],
    added: []
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initial,
    reducers: {
        SET_ELEMENTS: (state, action) => {
            state.shop = action.payload;
        },
        RESET_ELEMENTS: (state, action) => {
            state.shop = [];
        },
        ADD_CART: (state, action) => {

            //funzione litigio

            // if (state.added.length > 0) {
                // state.added.push(action.payload)
                // const temp = current(state.added)
                // const findCurrentEl = temp.filter((el) => el.name !== action.payload.name)
                // findCurrentEl.push(action.payload);








                
            //     state.added = state.added.map((el) => {
            //         if(el.name===action.payload.name){
            //             return {...el, quantity:action.payload.quantity}
            //         } else {
            //             return el
            //         }
            //     });
            // } else {
            //     state.added.push(action.payload)
            // }












            // if(state.added.length>0){
            //     const temp = current(state.added)
            //      temp.map((el, index)=>{
            //          if(el.name===action.payload.name){
            //              el.quantity = 10;
                         
                       
            //          } else {
            //              state.added.push(action.payload)
            //          }
            //      }) 
            //     }

        },
        REMOVE_CART: (state, action) => {
            const temp = current(state.added)
            const findCurrentEl = temp.filter((el) => el.name !== action.payload.name)
            console.log(findCurrentEl)
            state.added = findCurrentEl;
        },
        CHECKOUT: (state, action) => {
            state.added = []
        },
    }

})


export const { SET_ELEMENTS, RESET_ELEMENTS, ADD_CART, CHECKOUT, REMOVE_CART } = shopSlice.actions
export default shopSlice.reducer