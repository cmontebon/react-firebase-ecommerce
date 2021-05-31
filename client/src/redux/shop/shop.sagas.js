import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { ShopActionTypes } from './shop.types';

import {
    fetchCollectionsStart,
    fetchCollectionSuccess,
    fetchCollectionFailed,
} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionFailed(error));
    }
}

export function *fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}