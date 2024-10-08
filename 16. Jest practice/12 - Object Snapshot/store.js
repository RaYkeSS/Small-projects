import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { addUser } from "./obj.js";
import usersReducer from "./obj.js";

const rootReducer = combineReducers({
  users: usersReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

const store = setupStore();
store.dispatch(addUser("Kevin"));
export const logo = store.getState();
