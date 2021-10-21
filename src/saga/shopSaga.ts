import { callElem } from "../utility/api";
import { AxiosResponse } from "axios";
import {Added, ADD_CART, CHECKOUT, REMOVE_CART, RESET_ELEMENTS, SET_ELEMENTS, ShopAPI } from "../app/shopSlice"
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

function* getShopSaga () {
    const elements:AxiosResponse= yield call(callElem)
    yield put(SET_ELEMENTS(elements))
};

function* resetStateSaga () {
    yield put(RESET_ELEMENTS([]))
};

function* addToCart(action:PayloadAction<Added>){
    yield put(ADD_CART(action.payload))
}

function* removeToCartSaga(action:PayloadAction<Added>){
    yield put(REMOVE_CART(action.payload))
}

function* checkoutCart(){
    yield put(CHECKOUT([]))
}

export default function* shopSaga(){
    yield takeEvery("SET_ELEMENTS", getShopSaga)
    yield takeEvery("RESET_ELEMENTS", resetStateSaga)
    yield takeEvery("ADD_CART", addToCart)
    yield takeEvery("CHECKOUT", checkoutCart)
    yield takeEvery("REMOVE_CART", removeToCartSaga)
}