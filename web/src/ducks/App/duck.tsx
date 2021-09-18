import { Reducer } from 'redux';
import { ActionTypes, SearchAction, SearchState } from './types';

const Actions = {
  
};

const INITIAL_STATE: SearchState = {
  foundItensBySearch: [],
  
};

const reducer: Reducer<SearchState> = (
  state = INITIAL_STATE,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case ActionTypes.SET_FOUND_ITEMS_BY_SEARCH:
      return {
        ...state,
        foundItensBySearch: action.payload?.foundItensBySearch,

      };
    case ActionTypes.KEY_SEARCH:
      return {
        ...state,
        keySearch: action.payload?.keySearch,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload?.error,
      };
    case ActionTypes.SET_SCREEN:
      return {
        ...state,
        screen: action.payload?.screen,
      };
    default:
      return state;
  }
};

export { Actions };
export default reducer;
