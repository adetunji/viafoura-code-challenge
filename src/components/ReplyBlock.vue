<template>
  <div class="reply-block">
    <span style="cursor: pointer;">REPLY</span>
    <span style="margin-left: 20px; cursor: pointer;">REPLIES</span>
    <span style="margin-left: 20px; cursor: pointer;">
      <BIconChevronUp/>
      <span style="margin-left: 2px; cursor: pointer;">
        {{upVotes}}
      </span>
    </span>
    <span style="margin-left: 20px; cursor: pointer;">
      <BIconChevronDown/>
      <span style="margin-left: 2px;">
        {{downVotes}}
      </span>
    </span>
  </div>
</template>

<script>
  import {BIconChevronUp, BIconChevronDown} from 'bootstrap-vue'
  export default {
    name: "ReplyBlock",
    components: {BIconChevronUp, BIconChevronDown},
    props: ['upVotes', 'downVotes']
  }
</script>

<style scoped>
  .reply-block {
    margin-top: 10px;
    color: darkgray;
    font-size: small;
  }


</style>
