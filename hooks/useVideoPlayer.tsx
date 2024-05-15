import { ChangeEvent, RefObject, useCallback, useEffect, useMemo, useState } from 'react'

export interface PlayerState {
  isPlaying: boolean
  progress: number
  speed: number
  isMuted: boolean
}

export interface UseVideoPlayer {
  currentTime: string | undefined
  duration: string | undefined
  playerState: PlayerState
  togglePlay: () => void
  toggleMute: () => void
  toggleFullscreen: () => void
  togglePictureInPicture: () => void
  handleOnTimeUpdate: () => void
  handleVideoProgress: (event: ChangeEvent<HTMLInputElement>) => void
  handleVideoSpeed: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function useVideoPlayer(videoElement: RefObject<HTMLVideoElement>): UseVideoPlayer {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    isMuted: false,
    progress: 0,
    speed: 1
  })

  const currentTime = useMemo(() => {
    if (!videoElement.current) return

    const video = videoElement.current

    const time = video?.duration - video?.currentTime

    const minute = Math.floor(time / 60) || 0
    const second = Math.floor(time % 60) || 0

    const formatedMinute = minute >= 10 ? minute : '0' + minute
    const formatedSecond = second >= 10 ? second : '0' + second

    return `${formatedMinute}:${formatedSecond}`
  }, [videoElement.current?.currentTime])

  const duration = useMemo(() => {
    if (!videoElement.current) return

    const video = videoElement.current

    const time = video?.duration

    const minute = Math.floor(time / 60) || 0
    const second = Math.floor(time % 60) || 0

    const formatedMinute = minute >= 10 ? minute : '0' + minute
    const formatedSecond = second >= 10 ? second : '0' + second

    return `${formatedMinute}:${formatedSecond}`
  }, [videoElement.current?.duration])

  const togglePlay = useCallback(() => {
    setPlayerState((ps) => ({
      ...ps,
      isPlaying: !ps.isPlaying
    }))
  }, [])

  const toggleMute = useCallback(() => {
    setPlayerState((ps) => ({
      ...ps,
      isMuted: !ps.isMuted
    }))
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!videoElement.current) return

    videoElement.current.requestFullscreen()
  }, [videoElement, videoElement])

  const togglePictureInPicture = useCallback(() => {
    if (!videoElement.current) return

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture()
    } else if (document.pictureInPictureEnabled) {
      videoElement.current?.requestPictureInPicture()
    }
  }, [videoElement, videoElement])

  const handleOnTimeUpdate = useCallback(() => {
    if (!videoElement.current) return

    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100

    setPlayerState((ps) => ({ ...ps, progress }))
  }, [videoElement.current?.currentTime, playerState])

  const handleVideoProgress = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const manualChange = Number(event?.target?.value)

      if (!videoElement.current) return

      videoElement.current.currentTime = (videoElement?.current?.duration / 100) * manualChange

      setPlayerState((ps) => ({ ...ps, progress: manualChange }))
    },
    [videoElement, playerState]
  )

  const handleVideoSpeed = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const speed = Number(event?.target?.value)

      if (!videoElement.current) return

      videoElement.current.playbackRate = speed

      setPlayerState((ps) => ({ ...ps, speed }))
    },
    [playerState]
  )

  useEffect(() => {
    if (!videoElement.current) return

    playerState.isPlaying ? videoElement.current.play() : videoElement.current.pause()
  }, [playerState.isPlaying, videoElement])

  useEffect(() => {
    if (!videoElement.current) return

    videoElement.current.muted = playerState.isMuted
  }, [playerState.isMuted, videoElement])

  return {
    duration,
    currentTime,
    playerState,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    togglePictureInPicture,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed
  }
}
