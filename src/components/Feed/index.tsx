// React and react related imports
import React, { useEffect, useState } from "react";

// Third party Libraries
import { Box, Stack, Typography } from "@mui/material";

// Custom components
import { Sidebar, Videos } from "@/path/index.ts";

import { fetchDataFromAPI } from "@/utils/fetchDataFromAPI.tsx";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");
  const [videos, setVideos] = useState<any[] | null>(null);

  useEffect(() => {
    setVideos(null);

    fetchDataFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data: { items: any[] }) => setVideos(data?.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          backgroundColor: "#000",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright @ 2025
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "92vh",
          flex: 2,
          backgroundColor: "#000",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
