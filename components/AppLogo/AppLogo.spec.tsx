import { render, screen } from 'test'
import { describe, it, expect } from 'vitest'

import { AppLogo } from './AppLogo'
import { logoAlt } from 'constants/alternative-texts'

describe('GradientText', () => {
  it('renders app logo with image and name', () => {
    const text = 'My text with gradient here h1'

    render(<AppLogo height={56} width={56} />)

    expect(screen.getByRole('img', { name: logoAlt })).toBeInTheDocument()
    expect(screen.getByText('Clingon')).toBeInTheDocument()
  })
})
