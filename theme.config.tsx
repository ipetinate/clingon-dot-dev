import { AppLogo } from './components/AppLogo'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <AppLogo height={56} width={56} />,
  project: {
    link: 'https://github.com/ipetinate/clingon'
  },
  chat: {},
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Clingon CLI" />
      <meta
        property="og:description"
        content="Create components, functions, pages, and other files for your project with a few commands"
      />
    </>
  ),
  docsRepositoryBase: 'https://github.com/ipetinate/clingon',
  footer: {
    text: `${new Date().getFullYear()} © Clingon.`
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Clingon'
    }
  }
}

export default config
