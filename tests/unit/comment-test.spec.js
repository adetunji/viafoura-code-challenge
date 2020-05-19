import { mount } from '@vue/test-utils'
import CommentText from '@/components/CommentText.vue'

describe('CommentText.vue', () => {
  it('Comment exists as props', () => {
    const msg = 'Hello There!';
    const wrapper = mount(CommentText, {
      propsData: {
        commentText: msg
      }
    });
    expect(wrapper.find("div").text()).toBe(msg)
  })
})
