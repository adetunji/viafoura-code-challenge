<template>
  <div class="author-container">
    <div class="name">
      {{name}}
    </div>
    <div class="badge badge-pill badge-dark role">
      {{role.toUpperCase()}}
    </div>
    <div class="time">
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
    vertical-align: middle;
  }
  .name {
    font-size: larger;
    font-weight: bolder;
    margin-right: 20px;
  }
  .role {
    height: fit-content;
  }
  .time {
    margin-left: 15px;
    color: dimgrey;
    font-size: small;
  }
</style>
