// React and react related imports
import React, {useState, useEffect} from 'react';

// Third party libraries
import { useParams } from 'react-router-dom';
import {Box, } from '@mui/material';

// custom component
import ChannelCard from '@/components/ChannelCard/index.tsx';
import VideoCard from '@/components/VideoCard/index.tsx';

// Utils
import {fetchDataFromAPI} from '@/utils/fetchDataFromAPI.tsx'

// type
import {type channelFullDetails, type VideosProps} from '@/types/types.ts';

const ChannelDetails = () => {
  const { id }= useParams();
  const [channelDetails, setChannelDetails] = useState<null | channelFullDetails>(null);
  const [videos, setVideos] = useState<[] | VideosProps[]>([]);

  console.log(channelDetails, "channel details")
  console.log(videos , "channel videos")

  useEffect(()=>{
    fetchDataFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then(data => setChannelDetails(data?.items[0]));
    fetchDataFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(data => setVideos(data?.items))
  }, [id])

  return (
   <Box>
    <ChannelCard {...channelDetails}/>


   </Box> 
  )
}

export default ChannelDetails