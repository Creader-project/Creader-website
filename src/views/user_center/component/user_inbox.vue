<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <h1 class="title is-3 page_title">Inbox</h1>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!--              <el-tab-pane label="Messages" name="first"></el-tab-pane>-->
              <el-tab-pane label="Notification" name="second"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </nav>
      <section class="user_notification">
        <div class="block">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <font-awesome-icon class="circle-icon" transform="shrink-6" :style="{ color: 'white' }" icon="bell"/>
              </div>
              <div class="level-item">
                <p> Someone has commented your comment</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <small> 6h Ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <font-awesome-icon class="circle-icon" transform="shrink-6" :style="{ color: 'white' }" icon="heart"/>
              </div>
              <div class="level-item">
                <p> Someone has liked your comment</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <small> 6h Ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <font-awesome-icon class="circle-icon" transform="shrink-6" :style="{ color: 'white' }" icon="flag"/>
              </div>
              <div class="level-item">
                <p> Someone has reported your comment </p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <small> 6h Ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <font-awesome-icon class="circle-icon" transform="shrink-6" :style="{ color: 'white' }" icon="info"/>
              </div>
              <div class="level-item">
                <p>This is a system info</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <small> 6h Ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "user_inbox",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.circle-icon {
  background: #ffc0c0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
  padding: 5px;
}
</style>