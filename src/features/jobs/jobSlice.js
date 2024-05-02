import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

// Create slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } =
  jobSlice.actions;

// Export reducer
export default jobSlice.reducer;
