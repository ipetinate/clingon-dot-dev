import '@testing-library/jest-dom/vitest'

import * as matchers from '@testing-library/jest-dom/matchers'

import { expect } from 'vitest'
import { afterEach } from 'node:test'
import { cleanup } from '@testing-library/react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
