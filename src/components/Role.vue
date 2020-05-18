<template>
  <div class="author-container">
    <div class="name">
      {{name}}
    </div>
    <div class="badge badge-pill badge-dark" style="height: fit-content;">
      {{role.toUpperCase()}}
    </div>
    <div style="margin-left: 15px;  color: darkgray; font-size: small;">
      &#8226; {{time}} minutes ago
    </div>
  </div>
</template>

<script>
  export default {
    name: "Role",
    props: [
      'role',
      'name',
      'time'
    ]
  }
</script>

<style scoped>
  .author-container {
    display: flex;
    align-items: center;
    /*flex-wrap: nowrap;*/
    /*background: aqua;*/
    vertical-align: middle;
  }
  .name {
    font-size: larger;
    font-weight: bolder;
    margin-right: 20px;
  }
  .author {
    /*flex-grow: 1;*/
    font-weight: bolder;
    background-color: black;
    /*border: none;*/
    color: white;
  }
</style>
