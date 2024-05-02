import '../global.css'

import { SpeedInsights } from '@vercel/speed-insights/next'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />

      <Component {...pageProps} />
    </>
  )
}
