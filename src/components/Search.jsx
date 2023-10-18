import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { InputAdornment, TextField } from "@mui/material";

const Search = ({ color }) => {
  const handleSearch = (event) => {
  };
  return (
    <div>
      <TextField style={{borderRadius:'10px'}}
        placeholder="Search"
        sx={{
          backgroundColor: color ? color : "white",
          "& .MuiInputBase-input": {
            border: "none",
            padding: "0.3em",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PiMagnifyingGlassBold size={20} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
