<template>
  <div class="hi">
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: 'Hi',
  data() {
    return {
      msg: '这是我的第一个vue程序'
    }
  }
}
</script>
<style scoped>
.hi {
  color: blue;
  font-size: 20px;
}
</style>
