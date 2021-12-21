<template>
  <div class="about">
    <el-row class="main_body">
      <h1>Sign in</h1>
      <el-col :span="6" :offset="6">
        <el-form :model="loginForm">
          <el-form-item>
            <div class="login_text">
              Username
            </div>
            <el-input type="text" v-model="loginForm.username">username</el-input>
          </el-form-item>
          <el-form-item>
            <div class="login_text">
              password
            </div>
            <el-input type="password" v-model="loginForm.password">password</el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-link class="forget_link" type="primary">Forget?</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="isLogin">Login</el-button>
            <router-link :to="'/register'" target = _blank><el-button type="primary">register</el-button></router-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <div class="button_wrap">
          <el-button class="selfButton" type="primary" icon="" size="medium"><span>Google login</span></el-button>
        </div>
        <div class="button_wrap">
          <el-button class="selfButton" type="primary" icon="el-icon-google"><span>Facebook Login</span></el-button>
        </div>
        <div class="button_wrap">
          <el-button class="selfButton" type="primary" icon="el-icon-google"><span>Twitter Login</span></el-button>
        </div>
      </el-col>
    </el-row>
    <form @submit.prevent="toggleLogin">
      <label>Username:</label>
      <input v-model="username" name="username">
      <label>Password:</label>
      <input v-model="password" name="password" type="password">
      <button class="button is-primary">login</button>
      <div v-if="errors.length">
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async toggleLogin() {

      this.$store.commit('setIsLoading', true)
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem('token')

      const userdata = {
        username: this.username,
        password: this.password,
        grant_type: 'password',
        client_id: 'CuHSbKKrPUwL0IzeRZ5M8CnTVrGav58BW9m75M9v',
        client_secret: 'kMX4H5mGCSGBgmhDTfi8vYLfU8SRfqBWx5F4IpFgtEKIjBcvLdc6oUImZ2rLVKPAgznY4mjMf9s8k67QYK1E9fzDrsdjw2dzYVXcLPzecSW4OWOV3DCfuTWD8lWQKRPo'
      }
      // login api call - for token generation
      // then add token to the store
      await axios
          .post('http://127.0.0.1:8000/api-auth/token/', userdata)
          .then((response) => {
            console.log(response.data)
            const access_token = response.data.access_token
            this.$store.commit('LOGIN_SUCCESS', response)
            console.log(access_token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
            localStorage.setItem('token_access', access_token)
            localStorage.setItem('token_refresh', response.data.refresh_token)
          }).catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`)
              }
            } else if (error.message) {
              this.errors.push(error.message)
            }
          })
      // Get user information
      // After the token added to authentication, retrieve user information from server
      await axios
          .get('http://127.0.0.1:8000/api/v1/login/',)
          .then((response) => {
            console.log(response.data)
            this.$store.commit('setUser', {
              'id': response.data.id,
              'username': response.data.username,
              'email': response.data.email,
              'role': response.data.role,
              'icon': response.data.icon
            })
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('userid', response.data.id)
            localStorage.setItem('email', response.data.email)
            this.$router.push('/')
          }).catch((error) => {
            console.log(error.data)
          })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
