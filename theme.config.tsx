import { AppLogo } from 'components/AppLogo'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { DiscussionIcon } from 'icons'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <AppLogo height={56} width={56} />,
  project: {
    link: 'https://github.com/ipetinate/clingon'
  },
  chat: {
    link: 'https://github.com/ipetinate/clingon/discussions',
    icon: <DiscussionIcon />
  },
  head: (
    <>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Clingon CLI" />
      <meta property="og:image" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta
        property="og:description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more"
      />
      <meta property="image" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta name="title" content="Clingon CLI" />
      <meta
        name="description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more"
      />
      <meta
        name="keywords"
        content="generator, frontend, clingon, react, vue, developertools, devexp, developerexperience, clitool, toolgenerator, nodejs, vitest, testinglibrary"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Isac Petinate" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/ipetinate/clingon',
  footer: {
    text: `${new Date().getFullYear()} © Clingon.`
  },
  useNextSeoProps() {
    const { asPath } = useRouter()

    if (asPath === '/') {
      return {
        titleTemplate: 'Home - Clingon'
      }
    }

    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Clingon'
      }
    }
  }
}

export default config
