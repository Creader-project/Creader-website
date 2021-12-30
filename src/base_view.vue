<template>
    <router-view name = "header"></router-view>
    <router-view class="content-margin" name = "content"></router-view>
    <router-view name = "footer"></router-view>
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
.content-margin{
  margin: 30px 0;
}

</style>
