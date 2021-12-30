<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  beforeCreate() {
    this.$store.commit('initializeStore')

    if (this.$store.state.token.access_token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + this.$store.state.token.access_token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  }
}
</script>
<style>
</style>
