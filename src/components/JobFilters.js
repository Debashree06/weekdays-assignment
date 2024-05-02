import React, { useState } from "react";

const JobFilters = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState("");
  const [techStack, setTechStack] = useState("");
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState("");

  const handleFilter = () => {
    const filters = {
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay,
    };
    onFilter(filters);
  };

  const clearFilters = () => {
    setMinExperience("");
    setCompanyName("");
    setLocation("");
    setRemote("");
    setTechStack("");
    setRole("");
    setMinBasePay("");
    handleFilter(); // Apply filters after clearing
  };

  return (
    <div className="job-filters">
      <input
        type="text"
        placeholder="Minimum Experience"
        value={minExperience}
        onChange={(e) => setMinExperience(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={remote} onChange={(e) => setRemote(e.target.value)}>
        <option value="">Remote</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <input
        type="text"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        placeholder="Minimum Base Pay"
        value={minBasePay}
        onChange={(e) => setMinBasePay(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default JobFilters;
