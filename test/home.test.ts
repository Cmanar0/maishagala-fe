import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

await setup({
  rootDir: './',
})

describe('Home Page', () => {
  it('renders homepage', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Welcome')
  })
})
