import React from 'react'

import { Stack, Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

// component này render ra danh sách các video
const Videos = ({ videos, direction }) => {
  console.log(videos)
  if (!videos?.length) return 'Loading.....';
  return (
    <Stack direction={direction || 'row'} flexWrap={'wrap'} justifyContent={'center'} gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.playlistId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channel={video} />}
        </Box>))}
    </Stack>
  )
}

export default Videos