<template>
  <div class="container">
    <div class="image">
      <el-image
          :src="url"
          fit="fit"
      ></el-image>
    </div>
    <div>
      <p>Something has went wrong Please go back to the home page</p>
      <router-link :to="{name: 'Home'}">
        <el-button @click="this.$route.to('/')">Go To Home</el-button>
      </router-link>
    </div>
  </div>
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
.container{
  margin: 0 auto;
  padding: 40px;
  width: 1077px;

}
.image{
  margin: 0 auto;
  width: 1001px;

}
</style>