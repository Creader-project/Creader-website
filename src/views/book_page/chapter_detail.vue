<template>
  <div class="chapter-container">
    <header class="chapter-header">
      <div class="header-top">
        <div class="breadcrumb_set">
          <!--          <el-breadcrumb separator="/" v-bind="chapter">-->
          <!--            <el-breadcrumb-item><span>Main</span></el-breadcrumb-item>-->
          <!--&lt;!&ndash;            <el-breadcrumb-item><span>{{ chapter.book.name }}</span></el-breadcrumb-item>&ndash;&gt;-->
          <!--            <el-breadcrumb-item><span>{{ chapter.title }}</span></el-breadcrumb-item>-->
          <!--            <el-breadcrumb-item><span>{{ chapter.id + 1 }}</span></el-breadcrumb-item>-->
          <!--          </el-breadcrumb>-->
        </div>
        <div class="text-setting">
          <el-select v-model="choices.font_size" style="width: 100px" placeholder="Size">
            <el-option label="16pt" value="16"/>
            <el-option label="18pt" value="18"/>
            <el-option label="20pt" value="20"/>
            <el-option label="22pt" value="22"/>
            <el-option label="24pt" value="24"/>
          </el-select><!--font-->
          <el-select v-model="choices.background" style="width: 100px" placeholder="Background">
            <el-option style="background-color: lightyellow" label="lightyellow" value="lightyellow"/>
            <el-option style="background-color: lightsteelblue" label="lightsteelblue" value="lightsteelblue"/>
            <el-option style="background-color: lightskyblue" label="lightskyblue" value="lightskyblue"/>
          </el-select><!--background color-->
          <el-select v-model="choices.font_family" style="width: 100px" placeholder="Font">
            <el-option label="Arial" value="Arial"/>
            <el-option label="Roboto" value="Roboto"/>
            <el-option label="Courier" value="Courier"/>
          </el-select><!--font-family-->
          <el-select v-model="choices.text_color" style="width: 150px" placeholder="Text color">
            <el-option label="Default" value="#000"/>
            <el-option label="Purple" value="#9370DB"/>
            <el-option label="Green" value="#2E8B57"/>
            <el-option label="DarkSlateGray" value="#2F4F4F"/>
            <el-option label="Steel blue" value="#778899"/>
            <el-option label="Maroon" value="#800000"/>
            <el-option label="Cyan" value="#6A5ACD"/>
            <el-option label="Rosy brown" value="#BC8F8F"/>
            <el-option label="Brown" value="#F4A460"/>
            <el-option label="Beige" value="#F5F5DC"/>
            <el-option label="White" value="#F5F5F5"/>
          </el-select><!---->
        </div>
      </div>
      <div class="chapter-info">
        <h2 class="chapter-name">{{ chapter.title }}</h2>
        <div class="button-group">
          <el-button-group>
            <el-button>Previous</el-button>
            <el-button>
              <router-link :to="{name:'book_detail'}">Index</router-link>
            </el-button>
            <el-button>Next</el-button>
            <el-button>Book Mark</el-button>
          </el-button-group>
        </div>
      </div>
    </header>
    <el-main>
      <div class="chapter-body" v-for="(item,i) in context.chapterContent" :key="i">
        <p v-bind:style="changeStyle()"  v-html="item" class="default_text">
        </p>
        <br/>
      </div>
    </el-main>
    <div class="chapter-info">
      <div class="button-group">
        <el-button-group>
          <el-button @click="goToPrevious">Previous</el-button>
          <el-button>
            <router-link :to="{name:'book_detail'}">Index</router-link>
          </el-button>
          <el-button @click="goToNext">Next</el-button>
          <el-button>Book Mark</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "chapter_detail",
  props: {
    book_id: String,
    position: [Number, String],
    url: String
  },
  data() {
    return {
      chapter: {},
      listOfChapter: [],
      context:[],
      choices: {
        font_size: '',
        background: '',
        font_family: '',
        text_color: ''
      },
      chapter_url:'',
      chapterVIP:false
    }
  },
  created() {
    this.chapter_url = this.$props.url;
    this.getChapterDetail(this.chapter_url);
    this.getChapterList();
  },

  methods: {
    addBookMarkFunction() {
      axios.post(`http://127.0.0.1:8000/bookmark/`, {
        chapter: this.chapter.id,
      }).then((response) => {
        console.log(response);
        this.$message({
          message: 'The book mark has been added',
          type: 'success'
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    changeStyle() {
      return {
        fontSize: this.choices.font_size + 'px',
        backgroundColor: this.choices.background,
        fontFamily: this.choices.font_family,
        color: this.choices.text_color
      }
    },
    getChapterDetail(url) {
      let content = []
      axios.get(url)
          .then((response) => {
            this.chapter = response.data;
            content.push(
                {
                  chapterContent: this.chapter.is_vip? !this.chapterVIP :(this.chapter ? this.chapter.body.split("\n") : this.chapter.body.split("\n"))
                }
            );
            this.context = content[0]

          })
          .catch(errors => {
            console.log(errors);
          });
    },
    getChapterList() {
      axios.get(`http://127.0.0.1:8000/api/v1/book/${this.$props.book_id}/chapter`)
          .then((response) => {
            this.listOfChapter = response.data
          })
          .catch(errors => {
            console.log(errors);
          });
    },
    goToNext() {
      let nextChapter = parseInt(this.$props.position) + 1;
      console.log(this.$props.url);
      console.log(this.listOfChapter[nextChapter].url);
      this.$router.push({
        name: 'chapter_detail',
        params:{
          url: this.listOfChapter[nextChapter].url,
          position: nextChapter,
          book_id:this.chapter.book
        }
      });
      console.log(this.$props.url);
      // if (this.$props.position === (this.listOfChapter.length - 1)) {
      //   this.$router.push({name: 'book_detail'})
      // } else {
      //
      //   if (this.listOfChapter[nextChapter]) {
      //
      //   } else {
      //     this.$router.push({name: 'book_detail'})
      //   }
      // }
    },
    goToPrevious() {
      // console.log('hi');
      console.log(this.$props.position);
      if (this.$props.position === (0)) {
        this.$router.push({name: 'book_detail'})
      } else {
        let prevChpater = parseInt(this.$props.position) - 1;
        if (this.listOfChapter[prevChpater]) {
          this.$router.push({
            name: 'chapter_detail',
            params: {
              book_id: this.chapter.book,
              id: this.listOfChapter[prevChpater].id,
              url: this.listOfChapter[prevChpater].url,
              position: prevChpater
            }
          })
        } else {
          this.$router.push({name: 'book_detail'})
        }
      }

    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.chapter_url = this.listOfChapter[this.$]
    this.getChapterDetail(this.$props.url);
    console.log(to.$props);
  },
  beforeRouteLeave(to, from, next){
    console.log('before route leave');
    console.log(this.$props)
  }
}
</script>

<style lang="scss" scoped>

.chapter-container {
  .chapter-header {
    height: 100%;
    padding: 0 20px;
    display: block;

    .header-top {
      height: 30px;
      margin-bottom: 20px;

      .breadcrumb_set {
        display: block;
        float: left;

        .el-breadcrumb__item span {
          font-size: 20px;
          line-height: 30px;
        }
      }

      .text-setting {
        float: right;
      }
    }
  }

  .chapter-info {
    .chapter-name {
      text-align: center;
      margin-bottom: 10px;
    }

    .button-group {
      margin: 0 auto;
      width: 400px;

      .el-button {
        width: 100px;
      }
    }
  }

  .default_text {
    font-size: 20px;
    font-family: Calibri Light, sans-serif;
    background-color: white;
    color: black;
    text-align: left;
  }
}
</style>
<style>

</style>
