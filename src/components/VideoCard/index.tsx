// React and Related imports
import React from 'react';

// Third party Libraries
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Types
import { type VideosProps } from '@/types/types.ts';

// Define the props for the VideoCard component
type VideoCardProps = VideosProps;

const VideoCard = ({ id, snippet }: VideoCardProps) => {
  const { videoId = '' } = id;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0, marginBottom: "1rem" }}>
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={videoId && `/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            {/* <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> */}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;