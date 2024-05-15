import type { UseVideoPlayer } from 'hooks/useVideoPlayer'
import type { MouseEvent, ReactNode } from 'react'

import { useCallback, useState, type ChangeEvent } from 'react'

import {
  ArrowsPointingOutIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon
} from '@heroicons/react/24/solid'

export function VideoPlayerControls({
  resources: {
    playerState,
    togglePlay,
    toggleFullscreen,
    togglePictureInPicture,
    toggleMute,
    handleVideoSpeed,
    handleVideoProgress,
    currentTime,
    duration
  }
}: {
  resources: Omit<UseVideoPlayer, 'handleOnTimeUpdate'>
}) {
  return (
    <div className="flex flex-row justify-between gap-10 z-30 text-white">
      <div className="flex flex-row justify-between gap-3 w-1/5">
        <PlayPauseToggleButton handleClick={togglePlay} state={playerState.isPlaying} />
      </div>

      <div className="flex flex-row justify-between gap-3 w-full">
        <TimeCounter currentTime={currentTime} duration={duration}>
          <VideoPlayerRange progress={playerState.progress} handleChange={handleVideoProgress} />
        </TimeCounter>
      </div>

      <div className="flex flex-row justify-end gap-5 w-2/5">
        <SelectPlaybackRate handleChange={handleVideoSpeed} />

        <MuteToggleButton handleClick={toggleMute} state={playerState.isMuted} />

        <TogglePictureInPicture handleClick={togglePictureInPicture} />

        <ToggleFullscreen handleClick={toggleFullscreen} />
      </div>
    </div>
  )
}

/*
 * Side components
 */

export function MuteToggleButton({
  state,
  handleClick
}: {
  state: boolean
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button onClick={handleClick}>
      {state ? <SpeakerXMarkIcon className="icon" /> : <SpeakerWaveIcon className="icon" />}
    </button>
  )
}

interface TimeCounterProps {
  children: ReactNode
  duration: string | undefined
  currentTime: string | undefined
}

export function TimeCounter({ children, currentTime, duration }: TimeCounterProps) {
  return (
    <div className="flex flex-row w-full content-center items-center gap-2">
      <p className="duration">{duration}</p>

      {children}

      <p className="current-time">{currentTime}</p>
    </div>
  )
}

export function ToggleFullscreen({
  handleClick
}: {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button onClick={handleClick}>
      <ArrowsPointingOutIcon className="icon" />
    </button>
  )
}

export function TogglePictureInPicture({
  handleClick
}: {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
      >
        <path
          d="M3.125 18.5H20.375C20.996 18.5 21.5 17.996 21.5 17.375V6.125C21.5 5.504 20.996 5 20.375 5H3.125C2.504 5 2 5.504 2 6.125V17.375C2 17.996 2.504 18.5 3.125 18.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3462 16H18.6538C18.8449 16 19 15.8507 19 15.6667V12.3333C19 12.1493 18.8449 12 18.6538 12H13.3462C13.1551 12 13 12.1493 13 12.3333V15.6667C13 15.8507 13.1551 16 13.3462 16Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export function VideoPlayerRange({
  handleChange,
  progress
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  progress: number
}) {
  return (
    <input
      className="w-full accent-violet-500"
      type="range"
      value={progress}
      min={0}
      max={100}
      onChange={handleChange}
    />
  )
}

export function PlayPauseToggleButton({
  state,
  handleClick
}: {
  state: boolean
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button onClick={handleClick}>
      {!state ? <PlayIcon className="icon" /> : <PauseIcon className="icon" />}
    </button>
  )
}

export function SelectPlaybackRate({
  handleChange
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) {
  const [playbackRate, setPlaybackRate] = useState('1')

  const handleChangePlaybackRate = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setPlaybackRate(e.target.value)
    handleChange(e)
  }, [])

  return (
    <select
      className="bg-transparent text-zinc-400 border-none"
      id="change-playback-rate"
      name="change-playback-rate"
      value={playbackRate}
      onChange={handleChangePlaybackRate}
    >
      <option value="0.50">0.50x</option>
      <option value="1">1x</option>
      <option value="1.25">1.25x</option>
      <option value="2">2x</option>
    </select>
  )
}
