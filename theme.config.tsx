import { AppLogo } from 'components/AppLogo'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { DiscussionIcon } from 'icons'

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
      <link rel="shortcut icon" href="logo/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Clingon CLI" />
      <meta name="title" content="Clingon CLI" />
      <meta
        property="og:description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more"
      />
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
    return {
      titleTemplate: '%s – Clingon'
    }
  }
}

export default config
