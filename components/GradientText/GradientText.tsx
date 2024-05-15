import { PropsWithChildren } from 'react'

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type GradientTextProps = {
  as: TextElement
}

export function GradientText({ children, as }: PropsWithChildren<GradientTextProps>) {
  const Element = as

  return (
    <Element className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
      {children}
    </Element>
  )
}
