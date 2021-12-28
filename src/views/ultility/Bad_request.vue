<template>
  <section class="section">
    <div class="container">
      <div class="mb-5 columns is-multiline is-centered">
        <div class="column is-8">
          <el-image
              class="image is-fullwidth"
              :src="url"

          ></el-image>
        </div>
      </div>
      <div class="has-text-centered">
        <span class="has-text-grey-dark">Error 404</span>
        <h2 class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Page not found</h2>
        <p class="subtitle has-text-grey mb-6">Sorry! We are unable to find the page you are looking for</p>
        <div class="buttons is-centered">
          <a class="button is-primary" href="#">
            <router-link
                :to="{name: 'Home'}"
                style="text-decoration: none; color: inherit;">
              Go back to Homepage
            </router-link>
          </a>
          <a class="button" href="#" @click="this.$router.go(-1)">
            Try Again!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Bad_request",
  data(){
    return{
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
</style>