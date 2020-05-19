<template>
  <div class="comment-block"
       @mouseover="hover = true"
       @mouseleave="hover = false">
    <div class="comment-text">
      <div style="display: flex">
          <Avatar/>
        <div>
          <Role :role="retrievedData.role" :name="retrievedData.name" :time="retrievedData.time"/>
          <CommentText :commentText="retrievedData.comment"/>
          <ReplyBlock/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommentText from "./CommentText";
  import ReplyBlock from "./ReplyBlock";
  import Role from "./Role";
  import Avatar from "./Avatar";
  import json from '../data'


  export default {
    name: 'Comment',
    components: {Avatar, Role, ReplyBlock, CommentText},
    data() {
      return {
        hover: false
      }
    },
    computed: {
      retrievedData: () => {
        return json;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comment-block {
    margin-left: 500px;
  }

  .comment-block:hover > .comment-text .reply-block {
    color: #000000;
    user-select: none;
  }
  .comment-text {
    width: 550px;
    text-align: left;
    border-top: #d3d3d3 solid 2px;
    border-bottom: #d3d3d3 solid 2px;
    padding-top: 20px;
    color: #000000;
    padding-bottom: 20px;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
