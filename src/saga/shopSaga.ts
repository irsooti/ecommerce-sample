import { callElem } from "../utility/api";
import { AxiosResponse } from "axios";
import { Added, ADD_CART, CLEAN_CART, RESET_ELEMENTS, SET_ELEMENTS, MINUS_ONE, ADD_ONE, RM_FROM_CART } from "../app/shopSlice"
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

function* getShopSaga() {
    const elements: AxiosResponse = yield call(callElem)
    yield put(SET_ELEMENTS(elements))
};

function* resetStateSaga() {
    yield put(RESET_ELEMENTS([]))
};

function* addToCart(action: PayloadAction<Added>) {
    yield put(ADD_CART(action.payload))
};

function* addOneSaga(action: PayloadAction<Added>) {
    yield put( ADD_ONE(action.payload))

};

function* RmOneSaga(action: PayloadAction<Added>) {
    yield put( MINUS_ONE(action.payload))

};

function* cleanCartSaga() {
    yield put(CLEAN_CART([]))
};

function* rmFromCartSaga(action: PayloadAction<Added>){
yield put(RM_FROM_CART(action.payload))
}

export default function* shopSaga() {
    yield takeEvery("SET_ELEMENTS", getShopSaga)
    yield takeEvery("RESET_ELEMENTS", resetStateSaga)
    yield takeEvery("ADD_CART", addToCart)
    yield takeEvery("ADD_ONE", addOneSaga)
    yield takeEvery("MINUS_ONE", RmOneSaga)
    yield takeEvery("CLEAN_CART", cleanCartSaga)
    yield takeEvery("RM_FROM_CART", rmFromCartSaga)
}