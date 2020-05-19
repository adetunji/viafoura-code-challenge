import { mount } from '@vue/test-utils'
import ReplyBlock from '@/components/ReplyBlock.vue'

describe('ReplyBlock.vue', () => {
  it('Vote count increments and decrements when clicked', () => {
    const wrapper = mount(ReplyBlock);
    wrapper.vm.upVote = 5;
    wrapper.vm.downVote = 4;
    wrapper.vm.vote('increment');
    expect(wrapper.vm.upVote).toBe(6);
    expect(wrapper.vm.downVote).toBe(3);
  })
})
