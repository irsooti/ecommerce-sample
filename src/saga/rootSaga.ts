import { spawn } from "@redux-saga/core/effects";
import shopSaga from "./shopSaga";

export default function* rootSaga (){
yield spawn(shopSaga)
}