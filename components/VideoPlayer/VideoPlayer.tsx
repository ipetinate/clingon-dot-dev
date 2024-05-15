import { useRef } from 'react'
import { useVideoPlayer } from 'hooks/useVideoPlayer'

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import { VideoPlayerControls } from 'components/VideoPlayerControls'
import { FloatPlayerControls } from 'components/FloatPlayerControls'

export type VideoPlayerProps = {
  source: string
  autoPlay?: boolean
}

export function VideoPlayer({ source, autoPlay }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoPlayer = useVideoPlayer(videoRef)

  return (
    <div className="relative w-full border-2 border-zinc-900 rounded-sm group">
      <FloatPlayerControls resources={videoPlayer}>
        <video
          preload="auto"
          className="relative w-full object-fill"
          ref={videoRef}
          autoPlay={autoPlay}
          onTimeUpdate={videoPlayer.handleOnTimeUpdate}
        >
          <source src={source} type="video/mp4" />
        </video>
      </FloatPlayerControls>

      <div className="invisible z-30 group-hover:visible opacity-70 absolute bg-black bottom-0 px-5 py-3 w-full right-0 left-0 ">
        <VideoPlayerControls resources={videoPlayer} />
      </div>
    </div>
  )
}

export default VideoPlayer
