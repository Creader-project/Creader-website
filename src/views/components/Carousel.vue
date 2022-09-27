<template>
  <el-container>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-container>
  <div>

  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      item: null
    }
  }
}
</script>

<style scoped>

</style>