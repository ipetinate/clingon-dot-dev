import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { VideoPlayer } from './VideoPlayer'

describe('VideoPlayer', () => {
  it('renders video tag', () => {
    render(<VideoPlayer src="/path" />)

    expect(screen.getByRole('video')).toBeInTheDocument()
  })
})
