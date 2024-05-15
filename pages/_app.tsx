import 'global.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />

      <Component {...pageProps} />
    </>
  )
}
