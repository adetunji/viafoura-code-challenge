import { mount } from '@vue/test-utils'
import Comment from '@/components/Comment.vue'
import CommentText from '@/components/CommentText.vue'

describe('Comment.vue', () => {
  it('CommentText component exists', () => {
    // const msg = 'new message'
    const wrapper = mount(Comment);
    expect(wrapper.findComponent(CommentText).exists()).toBe(true)
  })
})
