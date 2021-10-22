import { createSlice } from "@reduxjs/toolkit"

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
    text: string
    
}


const initial: initialState = {
    shop: [],
    added: [],
    text: "Grazie mille per aver acquistato da noi!"
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
        const indexFounded = state.added.findIndex(el => el.name === action.payload.name);
        if (indexFounded >= 0) state.added[indexFounded].quantity = action.payload.quantity
        else state.added.push(action.payload)
        },
    
        ADD_ONE: (state, action) => {
        const indexFounded = state.added.findIndex(el => el.name === action.payload.name);
        if (indexFounded >= 0) state.added[indexFounded].quantity = action.payload.quantity
        else state.added.push(action.payload)
         },

        MINUS_ONE: (state, action) => {
        const indexFounded = state.added.findIndex(el => el.name === action.payload.name);
        if (indexFounded >= 0) state.added[indexFounded].quantity = action.payload.quantity
        else state.added.push(action.payload)
        },

        CLEAN_CART: (state, action) => {
        state.added = [];
        },

        RM_FROM_CART:(state,action) => {
            console.log(action.payload)
            const indexFounded = state.added.findIndex(el => el.name === action.payload.name);
            if (indexFounded >= 0) state.added.splice(indexFounded, 1)
        },
    }

})


export const { SET_ELEMENTS, RESET_ELEMENTS, ADD_CART, CLEAN_CART, ADD_ONE, MINUS_ONE, RM_FROM_CART } = shopSlice.actions
export default shopSlice.reducer