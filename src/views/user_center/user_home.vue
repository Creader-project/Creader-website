<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="user_avatar">
        <el-avatar :size="150" :src="circleUrl"></el-avatar>
        <el-button type="primary" @click="toSettings" round>Edit Profile</el-button>
      </div>
      <section class="user_info">
        <div>
          <h2>{{ currentUser.username }}</h2>
        </div>
        <strong>LV 1</strong>
        <p>
          ID: {{ currentUser.id }}
        </p>
      </section>
      <p>
        <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
        <strong>{{ dateJoinIn }} joined</strong>
        <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
        <strong>UK</strong>
      </p>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li v-bind:class="{ 'is-active' : isActive && tabName === 'bookcase' }">
                <a @click="tabToRouter('bookcase')">Bookcase</a>
              </li>
              <li v-bind:class="{ 'is-active' : isActive && tabName === 'inbox' }">
                <a @click="tabToRouter('inbox')">Inbox</a>
              </li>
              <li>
                <a>Statement</a>
              </li>
              <li>
                <a>Wallet</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";

export default {
  created() {
    this.getUserDetail();
  },
  props:{
    id: Number
  },
  data() {
    return {
      currentUser:{},
      dateJoinIn: '',
      isActive: true,
      tabName:'bookcase',
      circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    }
  },
  methods: {
    getUserDetail() {
      axios
          .get('http://127.0.0.1:8000/api/v1/currentUser/',)
          .then((response) => {
            console.log(response.data);
            this.currentUser = response.data;
          })
          .catch((errors) => {
            console.error(errors);
          })
    },
    toSettings() {
      this.$router.push({name: "user_setting"})
    },
    tabToRouter(tag){
      this.$router.push({name: tag, params:{id: localStorage.getItem('userid')}});
      this.tabName = tag;

    }
  },
  computed: {
    timeReformate() {
      const rawTime = this.currentUser.date_joined;
      console.log(rawTime);
      this.dateJoinIn = rawTime.split('T')[0];

    }
  }
}

</script>
<style lang="scss" scoped>
.content-container {
  margin-bottom: 30px;
}
</style>
