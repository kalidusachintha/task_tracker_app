import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonUtility from '@/components/ButtonUtility.vue'
import IconSpinner from '@/components/IconSpinner.vue'

describe('Check button', () => {
  it('render icon spinner properly', () => {
      const wrapper = mount(ButtonUtility, {
        props: {
          loading: true
        },
        slots: {
          default: 'Submit'
        },
        global: {
          components: {
            IconSpinner: IconSpinner
          }
        }
      })
      expect(wrapper.text()).not.toContain('Submit')
      expect(wrapper.findComponent(IconSpinner).exists()).toBe(true)
  })
  it('render submit text properly', () => {
    const wrapper = mount(ButtonUtility, {
      props: {
        loading: false
      },
      slots: {
        default: 'Submit'
      },
      global: {
        components: {
          IconSpinner: IconSpinner
        }
      }
    })
    expect(wrapper.text()).toContain('Submit')
    expect(wrapper.findComponent(IconSpinner).exists()).toBe(false)
    })
})
