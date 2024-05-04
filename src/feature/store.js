import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./JobPartition";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
