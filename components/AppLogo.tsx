import { logoAlt } from '../constants/alternative-texts'

export type AppLogoProps = {
  width?: number
  height?: number
}

export function AppLogo({ width, height }: AppLogoProps) {
  return (
    <div className="flex flex-row items-center" aria-description="Clingon logo - image with name">
      <img src="/logo.svg" width={width} height={height} alt={logoAlt} />

      <h1 className="text-black dark:text-white text-3xl">Clingon</h1>
    </div>
  )
}
