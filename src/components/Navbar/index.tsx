// React and react related imports
import React from "react";

// Third party libraries
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// Custom componenets
import SearchBar from "../SearchBar/index.tsx";
// Assets
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#000",
        padding: "1rem 1rem",
        position: "sticky",
        top: 0,
        borderBottom: "1px solid grey"
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "3rem", width: "4rem", borderRadius: "1rem" }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
