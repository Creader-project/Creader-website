<template>
  <div class="home">
    <el-carousel v-if="bannerObject.length > 0" :interval="interval" indicator-position="none" arrow="hover"
                 height="500px">
      <el-carousel-item v-for="item in bannerObject" :key="item">
        <h3>{{ item.text }}</h3>
        <h2 class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Take quick action that increases
          your
          brand's regular profit.</h2>
        <p class="subtitle mb-5">If you have ever wondered how to develop your brand, this is the
          place for you. Take a big step forward in growing your business with this great tool.</p>
        <div class="buttons is-centered">
          <a class="button is-primary" :href="item.book">Active Demo</a>
          <a class="button" href="#">Share with your friends</a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div>

    </div>
    <div class="hero is-medium ">
      <div class="hero-foot">
        <nav class="tabs is-centered is-boxed is-fullwidth">
          <div class="container" style="text-align: center">
            <ul>
              <li v-for="category in firstHalf">
                <a>{{ category }}</a>
              </li>
            </ul>
            <ul>
              <li v-for="category in nextHalf">
                <a>{{ category }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="container">
      <el-row class="main_content" :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple-dark">
            <div>
              <h3 class="title is-3">Top Pick</h3>
              <el-divider></el-divider>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <section>
                  <el-image class="top_pick_large_cover" :src="src"></el-image>
                  <div>
                    <h4 class="title is-4">Think Outside the box</h4>
                    <h6 class="title is-6">Think Outside the box</h6>
                    <h6>Think Outside the box</h6>
                  </div>
                </section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis duis congue diam vitae
                  enim.</p>
              </div>
              <div class="column grid">
                <div class="top_pick_small" v-for="item in topPickObject">
                  <el-image class="top_pick_small_cover" :src="src"></el-image>
                  <div class="top_pick_small_info" @click="toTheBook(item.book.id)">
                    <h3 class="book-title">{{ item.book.title }}</h3>
                    <span class="book-author">{{ item.book.author }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="block news_block">
            <div class="news_block_header">
              <h3 class="title is-3">Recent News</h3>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
            <div class="block">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <span>09. Sept</span>
              <el-divider></el-divider>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <h1 class="title is-1 main_push_title">Today suggestion</h1>
          <div class="main_push">
            <div class="columns">
              <div class="column is-one-third">
                <el-image class="main_book_cover" :src="src"></el-image>
              </div>
              <div class="column main_book_info">
                <div class="main_book_header">
                  <h2 class="title is-2">Think Outside The Box</h2>
                  <h4 class="title is-4">Amelia Pond</h4>
                </div>
                <el-divider></el-divider>
                <div class="main_book_button">
                  <el-button>Read</el-button>
                  <el-button>+</el-button>
                </div>
                <div class="main_book_description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante fringilla morbi tellus laoreet in id.
                    Phasellus integer in auctor in bibendum felis a. Pharetra faucibus velit, non pellentesque nunc arcu
                    maecenas. </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue';
import axios from "axios";

export default {
  name: 'Home_v1',
  data() {
    return {
      interval: 3000,
      activeItem: 'monetization',
      categories: ['History', 'Sci-Fi', 'Romance', 'Urban', 'FanFiction', 'Horror', 'Criminal', 'Fantasy', 'Action', 'Game'],
      src: ref(
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      ),
      bannerObject: {},
      topPickObject: {}
    }
  },

  watch: {},
  async beforeMount() {
    let detailUrl = [
      'http://127.0.0.1:8000/api/v1/index_image/',
      'http://127.0.0.1:8000/api/v1/index_link/'
    ];

    await Promise
        .all(detailUrl.map((detailUrl) => axios.get(detailUrl)))
        .then(([{data: banner_image}, {data: top_links}]) => {
          this.bannerObject = banner_image;
          console.log(top_links)
          this.topPickObject = top_links;
        })
        .catch(errors => {
          console.error(errors);
        });
  },
  computed: {
    firstHalf: function () {
      //should be random in the future
      let middle = this.categories.length / 2;
      return this.categories.slice(0, middle);
    },
    nextHalf: function () {
      //should be random in the future
      let middle = this.categories.length / 2;
      return this.categories.slice(middle, this.categories.length);
    }
  },
  methods: {
    isActive(menuItem) {
      console.log(this.categories.length)
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    },
    toTheBook(bookId) {
      this.$router.push({name: 'book_detail', params: {id: bookId}});
    }
  },
}
</script>
<style lang="scss" scoped>
.top_pick_large_cover {
  width: 225px;
  height: 350px;
}

.grid {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);

  .top_pick_small {
    position: relative;
    height: 280px;
    &:hover{
      color: #00c4a7;
    }
    .top_pick_small_info {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .top_pick_small_cover {
      //position: absolute;
      top: 0;
      height: 200px;
      width: 150px;
    }
  }

  div > div {
    padding: 10px;
  }
}

.main_content {
  height: auto;
  margin: 30px 0;
}

.main_push_title {
  margin: 20px 10px;
}

.main_push {
  padding: 10px;

  .main_book_cover {
    width: 260px;
    height: 350px;
  }

  .main_book_info {
    padding: 30px;

    .main_book_header {
      text-align: left;
    }

    .main_book_button {
      margin-bottom: 20px;
      text-align: left;
    }

    .main_book_description {
      text-align: justify;
    }
  }
}
</style>