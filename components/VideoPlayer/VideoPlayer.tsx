export type VideoPlayerProps = {
  id?: string
  src: string
  width?: string
  poster?: string
}

export function VideoPlayer({ id, src, poster, width }: VideoPlayerProps) {
  return (
    <video
      controls
      src={src}
      width={width}
      poster={poster}
      role="video"
      aria-roledescription="video"
      className="my-5"
    >
      Sorry, your browser doesn't support embedded videos.
    </video>
  )
}
