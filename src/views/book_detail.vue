<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-row :gutter="24" class="book_detail">
        <el-col :span="6">
          <el-image
              :src="url"
              fit="none"
          ></el-image>
        </el-col>
        <el-col :span="18" class="detail_header">
          <el-container>
            <el-header>
              <div>
                <p>Book Name</p>
                <p>Book author</p>
              </div>
            </el-header>
            <el-main>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum sagittis erat egestas malesuada. Cras sed porta magna, ut dapibus neque. Sed condimentum semper dolor, a pellentesque massa facilisis vitae. Vestibulum non neque metus. Duis dignissim dapibus lacus, eu dignissim neque molestie vitae. Suspendisse faucibus interdum efficitur. Praesent dignissim enim.
              </p>
            </el-main>
            <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
            <el-footer style="width: auto">
              <el-button type="primary" round>
                <i class="el-icon-arrow-right el-icon--right"></i> Start Reading
              </el-button>
              <el-button type="info" round>+</el-button>
            </el-footer>
          </el-container>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "book_detail",

  data() {
    return {
      book_info: null,
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      chapters: [
        {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        }, {
          bookName: 1,
          chaptername: 'ddddd'
        },
      ]
    }
  },
  beforeCreate() {
    console.log(axios.defaults.headers.common['Authorization'])
    axios
        .get('http://127.0.0.1:8000/api/v1/detail/1')
        .then((response) => {
          console.log(response.data)
          this.book_info = response.data
        })
  },
  methods: {
    method1() {
    }
  }
}
</script>

<style scoped>

.detail_header{
  text-align: left;
  padding:20px 0px;
}
</style>
