import { AppLogo } from 'components/AppLogo'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <AppLogo height={56} width={56} />,
  project: {
    link: 'https://github.com/ipetinate/clingon'
  },
  head: (
    <>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://clingon.dev" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://clingon.dev" />
      <meta property="og:title" content="Clingon CLI - Docs & Blog" />
      <meta property="og:image" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta
        property="og:description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more"
      />
      <meta property="twitter:title" content="Clingon CLI - Docs & Blog" />
      <meta property="twitter:image" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta property="twitter:card" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta
        property="twitter:description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more"
      />
      <meta property="image" content="https://www.clingon.dev/icon512_maskable.png" />
      <meta name="title" content="Clingon CLI - Docs & Blog" />
      <meta
        name="description"
        content="Create resources for your project with just a few steps, components, pages, functions, and more. Increase your daily Developer Experience."
      />
      <meta
        name="keywords"
        content="developerexperience, functions, components, pages, resources, project, daily"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Isac Petinate" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/ipetinate/clingon',
  // banner: {
  //   key: '1.0.0',
  //   text: (
  //     <a href="https://clingon.dev/releases" target="_blank">
  //       🎉 🖖 Clingon 1.0 is released. Read more →
  //     </a>
  //   )
  // },
  footer: {
    text: `${new Date().getFullYear()} © Isac Petinate`
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
