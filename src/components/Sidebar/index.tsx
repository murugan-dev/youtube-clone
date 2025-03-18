// React and rect related imports
import React from "react";

// Third party Libraries
import { Stack } from "@mui/material";

// Custom components
import { categories } from "@/utils/contants.tsx";

// Styles
import './styles.css';

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
  direction="row"
  sx={{
    overflowY: "auto",
    height: { sx: "auto", md: "95%" },
    flexDirection: { md: "column" },
    scrollbarWidth: "none", // Hide scrollbar for Firefox
    msOverflowStyle: "none", // Hide scrollbar for IE/Edge
    "&::-webkit-scrollbar": { // Hide scrollbar for Chrome, Safari, and Opera
      display: "none",
    },
  }}
>
  {categories?.map((category) => (
    <button
      className="category-btn"
      onClick={() => setSelectedCategory(category.name)}
      style={{
        background: category.name === selectedCategory && "#FC1503",
        color: "white",
      }}
      key={category.name}
    >
      <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
        {category.icon}
      </span>
      <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
        {category.name}
      </span>
    </button>
  ))}
</Stack>
);

export default Categories;