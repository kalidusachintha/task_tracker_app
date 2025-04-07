import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ValidationError from '@/components/ValidationError.vue'

describe('Test validations', () => {
  it('renders properly', () => {
    const wrapper = mount(ValidationError, {
      props: {
        errors: {
          title: ['The title is missing'],
        },
        field: 'title',
      },
    })
    expect(wrapper.text()).toContain('The title is missing')
    expect(wrapper.find('li').isVisible()).toBe(true)
  })

  it('Not rendering for empty props', () => {
    const wrapper = mount(ValidationError, {
      props: {
        errors: {},
        field: '',
      },
    })
    expect(wrapper.find('li').exists()).toBe(false)
  })
})
