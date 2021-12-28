<template>
  <div id="app">
    <router-view name = "header"></router-view>
    <router-view class="content-margin" name = "content"></router-view>
    <router-view name = "footer"></router-view>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'base_view',
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.content-margin{
  margin: 30px 0;
}

</style>
