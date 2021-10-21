import { callElem } from "../utility/api";
import { AxiosResponse } from "axios";
import {RESET_ELEMENTS, SET_ELEMENTS } from "../app/shopSlice"
import { call, put, takeEvery } from "@redux-saga/core/effects";

function* getShopSaga () {
    const elements:AxiosResponse= yield call(callElem)
    yield put(SET_ELEMENTS(elements))
};

function* resetStateSaga () {
    yield put(RESET_ELEMENTS([]))
};

export default function* shopSaga(){
    yield takeEvery("SET_ELEMENTS", getShopSaga)
    yield takeEvery("RESET_ELEMENTS", resetStateSaga)
}