import { all, call, Effect, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from "axios";

import Store from '../../store';
import { ActionTypes,  SearchState } from './types';
import urlServer from '../../utils/server';


function* getSearch(payload: SearchState): Iterable<Effect> {
  try {
    const result: any = yield call(
      axios.get,
      `${urlServer}/?search=${payload.keySearch}`,
    );
  
    yield put({
      type: ActionTypes.SET_FOUND_ITEMS_BY_SEARCH,
      payload: result,
    })
  } catch (err) {
    yield put({
      type: ActionTypes.SET_ERROR,
      payload: err,
    })
  }
}

// export default all([
//   // takeLatest(ActionTypes.SET_FOUND_ITEMS_BY_SEARCH, setResultSearched),
//   // takeLatest(ActionTypes.KEY_SEARCH, getSearch),

// ]);
// }