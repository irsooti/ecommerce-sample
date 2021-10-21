import { createSlice } from "@reduxjs/toolkit"

export interface shopAPI {
    price: number,
    name: string
}

interface initialState {
    shop: Array<shopAPI[]>
}


const initial: initialState = {
    shop: []
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initial,
    reducers: {
        SET_ELEMENTS: (state, action) => {
            state.shop.push(action.payload)
        },
        RESET_ELEMENTS: (state, action) => {
            state.shop = [];
        },
       
    }

})


export const { SET_ELEMENTS, RESET_ELEMENTS } = shopSlice.actions
export default shopSlice.reducer