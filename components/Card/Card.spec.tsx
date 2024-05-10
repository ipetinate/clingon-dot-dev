import { render, screen } from '../../test'
import { describe, it, expect } from 'vitest'

import { Card } from './Card'

describe('Card', () => {
  it('renders a card with children', () => {
    render(
      <Card id="test-card">
        <p>children</p>
      </Card>
    )

    expect(screen.getByText('children')).toBeInTheDocument()
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })
})
