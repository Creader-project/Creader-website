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
                <h1 class="title">{{ this.book_info.title }}</h1>
                <h2 class="subtitle">{{ book_info ? book_info.author.username : '' }}</h2>
              </div>
              <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
              >
              </el-rate>
            </el-header>
            <div class="short_des">
              <p>{{ this.book_info.description }}</p>
            </div>
            <el-divider></el-divider>
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">View</p>
                  <p class="title total_click_styple">{{ this.book_info.total_click }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Rating</p>
                  <p class="title">{{ this.book_info.total_vote }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Likes</p>
                  <p class="title">{{ this.book_info.fav_num }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Chapters</p>
                  <p class="title">{{ this.book_info.chapter_count }}</p>
                </div>
              </div>
            </nav>
            <el-divider>
              <el-footer class="book_button">
                <el-button type="primary" round @click="toChapter()">
                  <i class="el-icon-notebook-2 el-icon--right"></i> Start Reading
                </el-button>
                <el-button type="primary" round><i class="el-icon-plus el-icon--right"></i></el-button>
                <el-button type="primary" round><i class="el-icon-share el-icon--right"></i></el-button>
              </el-footer>
            </el-divider>
          </el-container>
        </el-col>
      </el-row>
      <el-row :gutter="24" style="text-align: justify">
        <el-col>
          <el-main>
            <span>Detail</span>
            <el-divider direction="vertical"></el-divider>
            <span>Table of content</span>
          </el-main>
        </el-col>
        <!--        <el-col>-->
        <!--          <el-main>-->
        <!--            <h3 class="title is-3">Tags</h3>-->
        <!--            <el-space wrap>-->
        <!--              <el-tag type="success">cultivation</el-tag>-->
        <!--              <el-tag type="success">adventure</el-tag>-->
        <!--              <el-tag type="success">action</el-tag>-->
        <!--              <el-tag type="success">Levelup</el-tag>-->
        <!--            </el-space>-->
        <!--          </el-main>-->
        <!--          <el-main class="is-centered">-->
        <!--            <h3 class="title is-3">Our recommendations</h3>-->
        <!--            <el-divider></el-divider>-->
        <!--            <el-row :gutter="24" style="padding:20px">-->
        <!--              <el-col v-for="i in 6" :span="4">-->
        <!--                <div>-->
        <!--                  <el-image-->
        <!--                      :src="url"-->
        <!--                      fit="none"-->
        <!--                  ></el-image>-->
        <!--                  <p class="title is-4">Book Name</p>-->
        <!--                  <p class="subtitle is-5">Book author</p>-->
        <!--                </div>-->
        <!--              </el-col>-->
        <!--            </el-row>-->
        <!--          </el-main>-->
        <!--          <el-main>-->
        <!--            <h3 class="title is-3">Comments</h3>-->
        <!--            <el-divider></el-divider>-->
        <!--            <article class="media">-->
        <!--              <figure class="media-left">-->
        <!--                <p class="image is-64x64">-->
        <!--                  <img src="https://bulma.io/images/placeholders/128x128.png">-->
        <!--                </p>-->
        <!--              </figure>-->
        <!--              <div class="media-content">-->
        <!--                <div class="field">-->
        <!--                  <p class="control">-->
        <!--                    <el-rate v-model="value1"></el-rate>-->
        <!--                  </p>-->
        <!--                </div>-->
        <!--                <div class="field">-->
        <!--                  <p class="control">-->
        <!--                    <textarea class="textarea" placeholder="Add a comment..."></textarea>-->
        <!--                  </p>-->
        <!--                </div>-->
        <!--                <nav class="level">-->
        <!--                  <div class="level-left">-->
        <!--                    <div class="level-item">-->
        <!--                      <a class="button is-info">Submit</a>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                  <div class="level-right">-->
        <!--                    <div class="level-item">-->
        <!--                      <label class="checkbox">-->
        <!--                        <input type="checkbox"> Press enter to submit-->
        <!--                      </label>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                </nav>-->
        <!--              </div>-->
        <!--            </article>-->
        <!--          </el-main>-->
        <!--          <el-main>-->
        <!--            <article class="media">-->
        <!--              <figure class="media-left">-->
        <!--                <p class="image is-64x64">-->
        <!--                  <img src="https://bulma.io/images/placeholders/128x128.png">-->
        <!--                </p>-->
        <!--              </figure>-->
        <!--              <div class="media-content">-->
        <!--                <div class="content">-->
        <!--                  <p>-->
        <!--                    <strong>Barbara Middleton</strong>-->
        <!--                    <br>-->
        <!--                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit-->
        <!--                    blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.-->
        <!--                    <br>-->
        <!--                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>-->
        <!--                  </p>-->
        <!--                </div>-->

        <!--                <article class="media">-->
        <!--                  <figure class="media-left">-->
        <!--                    <p class="image is-48x48">-->
        <!--                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="">-->
        <!--                    </p>-->
        <!--                  </figure>-->
        <!--                  <div class="media-content">-->
        <!--                    <div class="content">-->
        <!--                      <p>-->
        <!--                        <strong>Sean Brown</strong>-->
        <!--                        <br>-->
        <!--                        Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique-->
        <!--                        senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a-->
        <!--                        lobortis leo feugiat.-->
        <!--                        <br>-->
        <!--                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>-->
        <!--                      </p>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                </article>-->

        <!--                <article class="media">-->
        <!--                  <figure class="media-left">-->
        <!--                    <p class="image is-48x48">-->
        <!--                      <img src="https://bulma.io/images/placeholders/96x96.png">-->
        <!--                    </p>-->
        <!--                  </figure>-->
        <!--                  <div class="media-content">-->
        <!--                    <div class="content">-->
        <!--                      <p>-->
        <!--                        <strong>Kayli Eunice </strong>-->
        <!--                        <br>-->
        <!--                        Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet-->
        <!--                        magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci-->
        <!--                        luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.-->
        <!--                        <br>-->
        <!--                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>-->
        <!--                      </p>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                </article>-->
        <!--              </div>-->
        <!--            </article>-->
        <!--          </el-main>-->
        <!--          <el-main>-->
        <!--            <div class="block" style="text-align: center">-->
        <!--              <el-pagination-->
        <!--                  @size-change="handleSizeChange"-->
        <!--                  @current-change="handleCurrentChange"-->
        <!--                  :current-page="currentPage4"-->
        <!--                  :page-sizes="[100, 200, 300, 400]"-->
        <!--                  :page-size="100"-->
        <!--                  layout="total, sizes, prev, pager, next, jumper"-->
        <!--                  :total="400"-->
        <!--              >-->
        <!--              </el-pagination>-->
        <!--            </div>-->
        <!--          </el-main>-->
        <!--        </el-col>-->
        <el-col>
          <div v-for="(chapter, index) in book_info.chapter" class="block" v-bind="chapter">
            <a
                @click="handleChapter(chapter,index)">
              <span>Chapter {{ index + 1 }}</span>. <span>{{ chapter.title }}</span>
            </a>
          </div>
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
      book_info: '',
      url: '',
      value: 3.7,
      loading: false,
      count: 5,
      size: 50,
    }
  },
  beforeMount() {
    axios.get(`http://127.0.0.1:8000/api/v1/book/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data)
          this.book_info = response.data
          this.url = this.book_info.cover_photo.file
        })
        .catch((err) => {
          console.log(err)
        })
  },
  computed: {
    noMore() {
      console.log(this.chapters.length)
      return this.count >= this.chapters.length
    },
    disabled() {
      return this.loading || this.noMore
    },
  },
  methods: {
    load() {

      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    },
    toChapter() {
      console.log(this.book_info.id);
    },
    async handleChapter(chapter, index) {

      await this.$router.push({
        name: 'chapter_detail',
        params: {book_id: this.book_info.id, url: chapter.url, position: index}
      }).catch(e => {
      });

    }
  }
}
</script>

<style lang="scss" scoped>

.detail_header{
  text-align: left;
  padding: 20px 0;
}


.short_des{
  padding: 20px;
  min-height: 100px;
}


</style>
