import { createStore, combineReducers } from 'redux';

const usersReducer = (state, action) => {
  // Implement this reducer to pass the tests below
};

const configureStore = (initialState = {}) => {
  return createStore(
    combineReducers({
      users: usersReducer,
    }),
    initialState,
  );
};


