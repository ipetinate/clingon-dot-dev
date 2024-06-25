type Props = {
  reverse?: boolean
  banner: JSX.Element
  content: JSX.Element
}

export function FeaturePanel({ reverse, banner, content }: Props) {
  return (
    <div
      className={`flex ${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } justify-between items-start content-start w-full h-auto`}
    >
      <div className="flex w-1/2 h-full">{banner}</div>
      <div className="flex w-1/2 h-full">{content}</div>
    </div>
  )
}
