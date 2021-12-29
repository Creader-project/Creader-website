<template>
  <nav class="navbar is-primary py-4">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img alt="" class="image" width="96px">
        </a>
        <a aria-expanded="false" aria-label="menu" class="navbar-burger" role="button">
          <span aria-hidden="true">Home</span>
          <span aria-hidden="true">Browse</span>
          <span aria-hidden="true">Ranking</span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"><router-link to="/">Home</router-link></a>
          <a class="navbar-item" href="#">Browser</a>
          <a class="navbar-item" href="#">Ranking</a>
        </div>
        <div class="navbar-item">
          <el-input
              class="input " placeholder="请输入内容"
              style="background-color: #00D1B2; border: none"
              type="search"
          >
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
        <div v-if="!this.$store.state.token.access_token" class="navbar-item">
          <div class="buttons">
            <a class="button" @click="login">Sign In</a>
            <a class="button" @click="register">Sign Up</a>
          </div>
        </div>
        <div v-else class="navbar-item">
          <div class="buttons">
            <a class="button" href="#">
              <router-link :to="{name:'bookcase', params:{id:this.$store.state.user.userid}}">
                Bookshelf
              </router-link>
            </a>
            <a class="button is-danger" href="#">Create</a>
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "header_two",
  data() {
    return {
      login_is: false
    }
  },
  methods: {
    login() {
      this.$router.push({name: 'login'});
    },
    register() {
      this.$router.push({name: 'register'});
    }
  },
  computed: {
    checkLogin() {
      if (this.$store.state.token.access_token) {
        this.login_is = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
