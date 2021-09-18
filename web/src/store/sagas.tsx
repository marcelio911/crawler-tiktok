import { all, Effect } from 'redux-saga/effects';
// import SearchSagas from '../ducks/App/saga';
import { Saga } from '@redux-saga/types'

// TODO: corrigir TypeError ao passar o rootSaga no sagaMiddleware.run()
export default function* rootSaga(): Iterator<any, any, undefined> {
  yield all([
    // SearchSagas
  ]);
}
