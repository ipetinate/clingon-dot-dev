import type { UseVideoPlayer } from 'hooks/useVideoPlayer'

import { PropsWithChildren, useEffect, useState } from 'react'

import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

interface VideoPlayerControlsProps {
  resources: Omit<UseVideoPlayer, 'handleOnTimeUpdate'>
}

export function FloatPlayerControls({
  resources,
  children
}: PropsWithChildren<VideoPlayerControlsProps>) {
  const show = useToggleShowItem(resources.playerState.isPlaying)

  return (
    <div
      className="group relative w-full h-full"
      onClick={resources.togglePlay}
      onDoubleClick={resources.toggleFullscreen}
    >
      <div
        className={`${show} absolute transition-opacity ease-in-out left-1/2 -translate-x-1/2 w-full h-full flex content-center items-center justify-center z-10`}
      >
        <div className="absolute">
          {resources.playerState.isPlaying ? (
            <PauseCircleIcon className="w-40 h-40 text-slate-400" />
          ) : (
            <PlayCircleIcon className="w-40 h-40 text-slate-400" />
          )}
        </div>
      </div>

      <div className="relative w-full h-full z-0">{children}</div>
    </div>
  )
}

function useToggleShowItem(playState: boolean) {
  const [show, setShow] = useState('opacity-0 group-hover:opacity-100')

  useEffect(() => {
    const showTime = 1000

    setTimeout(() => {
      setShow('opacity-0')
    }, showTime)

    return () => {
      setShow('opacity-0 group-hover:opacity-100')
    }
  }, [playState])

  return show
}
