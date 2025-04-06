import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import IconSpinner from '@/components/IconSpinner.vue'

describe('Test Icon spinner component', () => {
  it('renders properly', () => {
    const wrapper = mount(IconSpinner, {
      slots: {
        default: 'Submit',
      },
    })
    expect(wrapper.text()).toContain('Submit')
  })
})
