import React from 'react'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { AppLogo } from './components/AppLogo'

const config: DocsThemeConfig = {
  logo: <AppLogo height={56} width={56} />,
  project: {
    link: 'https://github.com/ipetinate/clingon'
  },
  chat: {},
  docsRepositoryBase: 'https://github.com/ipetinate/clingon',
  footer: {
    text: `${new Date().getFullYear()} © Clingon.`
  }
}

export default config
