import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { FloatPlayerControls } from 'components/FloatPlayerControls'

describe('FloatPlayerControls', () => {
  it('renders welcome message', () => {
    render(<FloatPlayerControls />)

    expect(
      screen.getByText("Hello, I'm a component, auto generated by Clingon CLI!")
    ).toBeInTheDocument()
  })
})
