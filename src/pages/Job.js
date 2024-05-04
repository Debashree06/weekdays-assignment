import React, { useEffect } from "react";
import JobFilters from "../components/JobFilters";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../feature/JobPartition";
import { Typography } from "@mui/material";

const Jobs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
          fontWeight: "bold",
          paddingTop: "15px",
        }}
      >
        Applicant Hub
      </Typography>
      <JobFilters />
      {/* <JobList /> */}
    </div>
  );
};

export default Jobs;
