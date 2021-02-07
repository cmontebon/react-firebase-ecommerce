import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { googleSignInFailure, googleSignInSuccess } from './user.actions'

export function* googleSignIn() {
    console.log('test');
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* googleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* userSaga() {
    yield all([
       call(googleSignInStart)
    ])
}