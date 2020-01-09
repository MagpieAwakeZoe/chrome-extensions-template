<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome! MIKU MIKU'
    }
  },
  mounted() {
    chrome.runtime.sendMessage('Hello', function(response) {
      document.write(response);
    });
  }
}
</script>

<style lang="stylus">
</style>
