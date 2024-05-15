import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { DiscussionIcon } from './Discussion'

describe('DiscussionIcon', () => {
  it('renders welcome message', () => {
    render(<DiscussionIcon />)

    expect(
      screen.getByText("Hello, I'm a component, auto generated by Clingon CLI!")
    ).toBeInTheDocument()
  })
})