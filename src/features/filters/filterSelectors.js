import { createSelector } from "@reduxjs/toolkit";

// Select the filters slice from the state
const selectFilters = (state) => state.filters;

// Select individual filter properties
export const selectMinExperience = createSelector(
  selectFilters,
  (filters) => filters.minExperience
);

export const selectCompany = createSelector(
  selectFilters,
  (filters) => filters.company
);

export const selectLocation = createSelector(
  selectFilters,
  (filters) => filters.location
);

export const selectRemoteOnSite = createSelector(
  selectFilters,
  (filters) => filters.remoteOnSite
);

export const selectTechStack = createSelector(
  selectFilters,
  (filters) => filters.techStack
);

export const selectRole = createSelector(
  selectFilters,
  (filters) => filters.role
);

export const selectMinBasePay = createSelector(
  selectFilters,
  (filters) => filters.minBasePay
);

// You can define more selectors as needed based on your filter state
