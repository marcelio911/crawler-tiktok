import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'
// import { fetchCount } from './SearchAPI'


export interface SearchState {
  readonly screen?: string;
  readonly error?: string;
  readonly foundItensBySearch?: any[];
  readonly hashtags?: any[];
  readonly keySearch?: string;
}

const initialState: SearchState = {
    foundItensBySearch: [],
    hashtags: [],
    error: undefined,
    keySearch: '',
    screen: undefined,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'Search/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount)
//     // The value we return becomes the `fulfilled` action payload
//     return response.data
//   }
// )

export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setResult: (state, action: PayloadAction<any[]>) => {
      state.foundItensBySearch = action.payload;
      
    },
    setHashtagsState: (state, action: PayloadAction<any[] | undefined>) => {
      state.hashtags = action.payload;
      
    },
    keySearch: (state, action: PayloadAction<string>) => {
      state.keySearch = action.payload;
    },
  },
})

export const { setResult, keySearch, setHashtagsState} = SearchSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.Search.value)`
export const search = (state: AppState) => state.search;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const setRegistersFound =
  (amount: any[]): AppThunk =>
  (dispatch, getState) => {
    dispatch(setResult(amount));
  }
export const setHashtags =
  (hashtags: any[] | undefined): AppThunk =>
  (dispatch, getState) => {
    console.log('hashtags12: ', hashtags);
    console.log('getState: ', getState);
    dispatch(setHashtagsState(hashtags));
  }

export default SearchSlice.reducer
