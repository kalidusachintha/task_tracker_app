import { describe, it, expect } from 'vitest'
import useUtility from '@/composables/utility.ts'

describe('Check utility functions', () => {
  it('string format', () => {
    const status = 'validated'
    const { formatStatus } = useUtility()
    const formatedString = formatStatus(status)
    expect(formatedString).toBe('Validated')
  })
})
