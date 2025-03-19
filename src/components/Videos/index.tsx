// React and React related imports
import React from "react";

// Third party Libraries
import { Box } from "@mui/material";

// Types
import { type VideosComponentProps } from "@/types/types.ts";

// Custom component
import { VideoCard, ChannelCard } from "@/path/index.ts";

const Videos: React.FC<VideosComponentProps> = ({ videos }) => {
  if (!videos) {
    return <Box sx={{color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", height: '80vh'}}>Loading...</Box>;
  }

  return (
    <Box sx={{display: "grid", gridTemplateColumns: {xs: "1fr",
      sm: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",}, gap: 0}}>
      {videos.map((item) => (
        <Box key={item?.id?.channelId || item?.id?.videoId}>
          {item?.id?.channelId && <ChannelCard />}
          {item?.id?.videoId && <VideoCard {...item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
