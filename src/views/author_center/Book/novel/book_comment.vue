<template>
  <div>
    <h2 style="padding: 10px 20px">Comments</h2>
    <el-row class="comment_body_user" v-for="(item, index) in user_comment" :key="index">
      <div>
        <el-avatar class="block" :src="item.user.profile.icon"/>
        <span style="margin: 10px 5px; display: block">{{item.user.username}}</span>
      </div>
      <div class="information_body">
        <div class="help_text">
          <p><strong>Comment</strong> on <strong>{{item.book.book_name}}</strong></p>
        </div>
        <div>{{item.message}}</div>
      </div>
    </el-row>
  </div>
</template>

<script>


  import axios from "axios";

  export default {
        name: "book_comment",
        data(){
          return{
            user_comment:[]
          }
        },
      created() {
          this.getUserComment();
      },
      methods:{
          getUserComment(){
            axios.get('http://127.0.0.1:8000/api/v1/book/comment').then((response)=>{
              console.log(response.data);
              this.user_comment = response.data;
            }).catch((err)=>{
              console.log(err)
            })
          }
      }
    }
</script>

<style lang="less">
  .comment_body_user{
    padding: 20px;
    .help_text{
      margin-bottom: 10px;
    }
  }
</style>
