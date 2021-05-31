import { all, takeLatest, put, call } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

export function* clearCartItems() {
    yield put(clearCart());
}

export function* onSignOutUser() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems)
}

export function* cartSaga() {
    yield all([
        call(onSignOutUser)
    ])
}