"use client";

import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

export default function AdvancedFilters() {
  // STATES
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="filters">
      <div className="filter-option">
        <p className="filter-header">Organization</p>
        <Select
          labelId="demo-simple-select-label"
          displayEmpty
          sx={{
            "& .MuiInputBase-input": {
              height: "34px",
              padding: "0.7em 0 0 14px",
              fontSize: "0.85rem",
            },
          }}
          fullWidth
          value={organization}
          onChange={(e: SelectChangeEvent) => setOrganization(e.target.value)}
          color="secondary"
        >
          <MenuItem value={""}>Select</MenuItem>
          <MenuItem value={"all_organization"}>All Organization</MenuItem>
          <MenuItem value={"lendsqr"}>Lendsqr</MenuItem>
          <MenuItem value={"unilever"}>Unilever</MenuItem>
        </Select>
      </div>
      <div className="filter-option">
        <p className="filter-header">Username</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="User"
          color="secondary"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          sx={{
            "& .MuiInputBase-input": {
              height: "43px",
              padding: "0 0 0 14px",
              fontSize: "0.85rem",
            },
          }}
        />
      </div>
      <div className="filter-option">
        <p className="filter-header">Email</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="Email"
          color="secondary"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          sx={{
            "& .MuiInputBase-input": {
              height: "43px",
              padding: "0 0 0 14px",
              fontSize: "0.85rem",
            },
          }}
        />
      </div>
      <div className="filter-option">
        <p className="filter-header">Date</p>
        <DatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          sx={{
            "& .MuiInputBase-input": {
              height: "43px",
              padding: "0em 0 0 14px",
              fontSize: "0.85rem",
            },
            width: "100%",
          }}
        />
      </div>
      <div className="filter-option">
        <p className="filter-header">Phone Number</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="Phone Number"
          color="secondary"
          value={phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
          sx={{
            "& .MuiInputBase-input": {
              height: "43px",
              padding: "0 0 0 14px",
              fontSize: "0.85rem",
            },
          }}
        />
      </div>
      <div className="filter-option">
        <p className="filter-header">Status</p>
        <Select
          labelId="demo-simple-select-label"
          displayEmpty
          sx={{
            "& .MuiInputBase-input": {
              height: "34px",
              padding: "0.7em 0 0 14px",
              fontSize: "0.85rem",
            },
          }}
          fullWidth
          value={organization}
          onChange={(e: SelectChangeEvent) => setOrganization(e.target.value)}
          color="secondary"
        >
          <MenuItem value={""}>Select</MenuItem>
          <MenuItem value={"all_status"}>All Status</MenuItem>
          <MenuItem value={"active"}>Active</MenuItem>
          <MenuItem value={"inactive"}>Inactive</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"blacklisted"}>Blacklisted</MenuItem>
        </Select>
      </div>
      <div className="buttons">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
}
