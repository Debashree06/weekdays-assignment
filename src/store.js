// store.js

// import { createStore , applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // If you're using Redux Thunk for async actions
// import rootReducer from "./reducers"; // Your root reducer

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobs/jobSlice"; // Adjust the import path for jobSlice.js
import filterReducer from "./features/filters/filterSlice"; // Adjust the import path for filterSlice.js

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    filters: filterReducer,
    // Add other reducers as needed
  },
});

export default store;
