<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="user_avatar">
        <el-avatar :size="150" :src="circleUrl"></el-avatar>
        <el-button circle>
          <el-icon>
            <camera-filled/>
          </el-icon>
        </el-button>
      </div>
      <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
        <el-form-item class="cus-label-class" label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
            prop="email"
            label="Email"
            class="cus-label-class"
            :rules="[
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
        >
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item class="cus-label-class" label="Gender">
          <el-radio-group v-model="form.gender">
            <el-radio label="Female" border></el-radio>
            <el-radio label="Male" border></el-radio>
            <el-radio label="Prefer not to say" border></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="cus-label-class" label="Location">
          <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="cus-label-class" label="About me!">
          <el-input v-model="form.desc" maxlength="200" show-word-limit type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Save the changes</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "user_setting",
  data() {
    return {
      labelPosition:'left',
      form: {
        username: '',
        email:'',
        gender:'',
        region:'',
        desc:''
      },
      circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    }
  }
}
</script>

<style scoped>
.cus-label-class :deep(.el-form-item__label) {
  text-decoration: mistyrose;
}
</style>