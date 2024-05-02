const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  standalone: true,
  timestamp: false
})

module.exports = withNextra()
