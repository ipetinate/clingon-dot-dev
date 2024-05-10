import { render, screen } from '../../test'
import { describe, it, expect } from 'vitest'

import { GradientText } from './GradientText'

describe('GradientText', () => {
  it('renders welcome message on h1 tag', () => {
    const text = 'My text with gradient here h1'

    render(<GradientText as="h1">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 1, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on h2 tag', () => {
    const text = 'My text with gradient here h2'

    render(<GradientText as="h2">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 2, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on h3 tag', () => {
    const text = 'My text with gradient here h3'

    render(<GradientText as="h3">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 3, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on h4 tag', () => {
    const text = 'My text with gradient here h4'

    render(<GradientText as="h4">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 4, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on h5 tag', () => {
    const text = 'My text with gradient here h5'

    render(<GradientText as="h5">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 5, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on h6 tag', () => {
    const text = 'My text with gradient here h6'

    render(<GradientText as="h6">{text}</GradientText>)

    expect(screen.getByRole('heading', { level: 6, name: text })).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on p tag', () => {
    const text = 'My text with gradient here p'

    render(<GradientText as="p">{text}</GradientText>)

    expect(screen.getByRole('paragraph')).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })

  it('renders welcome message on span tag', () => {
    const text = 'My text with gradient here span'

    render(<GradientText as="span">{text}</GradientText>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toHaveClass(
      'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
    )
  })
})
