<template>
  <div class="reply-block">
    <span style="">REPLY</span>
    <span style="margin-left: 20px;">REPLIES</span>
    <span class="clicks" @click="vote('increment')">
      <BIconChevronUp/>
      <span style="margin-left: 2px;">
        {{upVote}}
      </span>
    </span>
    <span class="clicks" @click="vote('decrement')">
      <BIconChevronDown />
      <span style="margin-left: 2px;">
        {{downVote}}
      </span>
    </span>
  </div>
</template>

<script>
  import {BIconChevronUp, BIconChevronDown} from 'bootstrap-vue'
  export default {
    name: "ReplyBlock",
    components: {BIconChevronUp, BIconChevronDown},
    props: ['upVotes', 'downVotes'],
    data () {
      return {
        upVote: 0,
        downVote: 0
      }
    },
    methods : {
      vote(action) {
        if (action === 'increment') {
          this.upVote += 1;
          if (this.downVote > 0) {
            this.downVote -= 1;
          }
        } else {
          this.downVote += 1;
          if (this.upVote > 0) {
            this.upVote -= 1;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .reply-block {
    margin-top: 10px;
    color: lightgray;
    font-size: small;
  }

  .clicks {
    margin-left: 20px;
    cursor: pointer;
  }
</style>
