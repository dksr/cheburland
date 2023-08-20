import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
  authApi,
  errorToastMiddleware,
  leaderboardApi,
  oAuthApi,
  userApi,
} from '@/app/redux'

import gameReducer from './reducers/gameSlice'
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  [authApi.reducerPath]: authApi.reducer,
  [oAuthApi.reducerPath]: oAuthApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [leaderboardApi.reducerPath]: leaderboardApi.reducer,
})

export const createStore = (cookie?: string) => {
  // let state

  // if (typeof window !== 'undefined') {
  //   state = window.initialState
  //   delete window.initialState
  // }

  const state =
    typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined

  if (typeof window !== 'undefined') {
    delete window.__PRELOADED_STATE__
  }

  return configureStore({
    reducer: rootReducer,
    preloadedState: state,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: cookie,
        },
      })
        .concat(authApi.middleware)
        .concat(oAuthApi.middleware)
        .concat(userApi.middleware)
        .concat(leaderboardApi.middleware),
    // .concat(errorToastMiddleware),
  })
}

// export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
