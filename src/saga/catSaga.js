import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from '../features/catState';

function* callCatsFetch() {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const formattedCatsShortend = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortend));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', callCatsFetch)
}

export default catSaga;