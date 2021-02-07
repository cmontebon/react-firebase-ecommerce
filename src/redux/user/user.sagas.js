import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signInSuccess, signInFailure } from './user.actions'

export function* getSnapshopFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapshopFromUserAuth, user)
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* emailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapshopFromUserAuth, user)
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* googleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
    yield all([
       call(googleSignInStart),
       call(emailSignInStart)
    ])
}