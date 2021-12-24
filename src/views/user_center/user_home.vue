<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="user_avatar">
        <el-avatar :size="150" :src="circleUrl"></el-avatar>
        <el-button type="primary" @click="toSettings" round>Edit Profile</el-button>
      </div>
      <section class="user_info">
        <div>
          <h2>Username</h2>
        </div>
        <strong>LV 1</strong>
        <p>
          ID: 00001
        </p>
      </section>
      <p>
        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
        <strong>22-21-2020 joined</strong>
        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
        <strong>UK</strong>
      </p>
      <el-divider/>
      <router-view name ='content'></router-view>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    }
  },
  methods: {
    toSettings() {
      this.$router.push({ name:"user_setting"})
    }
  }
}

</script>
<style>
</style>
