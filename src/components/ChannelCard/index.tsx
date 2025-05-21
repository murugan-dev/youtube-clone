// React and related imports
import React from 'react';

// Third party libraries
import { Box, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//MUI icons
import {Verified} from '@mui/icons-material';

// Types
import {type VideosProps} from "@/types/types.ts";

const ChannelCard = ({ id, snippet }: VideosProps) => {
  console.log(id, snippet, "from chennal card");
  return (
    <Box sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0,marginBottom: '1rem' }}>
      <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
      
      <CardContent sx={{display: "flex", alignItems: "center", flexDirection: "column", }}>
        
      <CardMedia image={snippet?.thumbnails?.high?.url} sx={{width: "180px", height: "180px", borderRadius: "50%"}}/>
      <Typography sx={{color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: '0.3rem'}}>{snippet?.channelTitle} <Verified sx={{color: "#fff", fontSize: "1rem", }}/></Typography>
      </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard