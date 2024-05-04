import { createSlice } from "@reduxjs/toolkit";
import { fetchJobsData } from "../utils/jobapi";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
};

const JobPartition = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    startFetching(state) {
      state.isLoading = true;
      state.error = null;
    },
    setJobs(state, action) {
      state.jobs.push(...action.payload);
      state.isLoading = false;
    },
    setFetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const fetchJobs = () => async (dispatch, getState) => {
  dispatch(startFetching());
  try {
    const data = await fetchJobsData();
    dispatch(setJobs(data.jdList));
  } catch (error) {
    dispatch(setFetchError("Error fetch"));
  }
};

export const { startFetching, setJobs, setFetchError } = JobPartition.actions;
export default JobPartition.reducer;
