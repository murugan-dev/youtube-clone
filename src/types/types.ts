import { SvgIconProps } from "@mui/material/SvgIcon";

export type MenuItem = {
  name: string;
  icon: React.ReactElement<SvgIconProps>;
};

export type VideosProps = {
  id: { videoId?: string, channelId?: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { high: { url: string } };
    channelTitle: string;
    channelId: string
  };
};

export type VideosComponentProps = {
  videos: VideosProps[] | null;
};

type channelStatistics ={
  viewCount: string,
  subscriberCount: string,
  videoCount: string
}

type channelId = {
  id: string
}
export type channelFullDetails = channelStatistics & VideosProps & channelId;
