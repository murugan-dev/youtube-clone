// import react and react related imports
import React from "react";

// Third party libraries
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

// styles
import "./styles.css";

const SearchBar: React.FC = () => {
  return (
    <Paper component={"form"} className="wrapper" sx={{borderRadius: "3rem"}}>
      <input type="text" placeholder="Search..." className="search-bar" />
      <IconButton type="submit">
        <Search sx={{ color: "red" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
