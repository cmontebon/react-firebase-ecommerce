import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/user.sagas'
import { cartSaga } from './cart/cart.sagas'

import { fetchCollectionStart } from './shop/shop.sagas';


export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSaga),
        call(cartSaga),
    ])
}

