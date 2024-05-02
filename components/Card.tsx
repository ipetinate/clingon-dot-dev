import { PropsWithChildren } from 'react'

export type CardProps = {
  id: string
}

export function Card({ id, children }: PropsWithChildren<CardProps>) {
  return (
    <div id={id} className="p-3 rounded-lg border dark:border-white/50 border-black/50">
      {children}
    </div>
  )
}
