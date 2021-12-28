<template>
  <el-row class="body">
    <el-col :span="1" :offset="6">
      <div class="left_panel" style="">
        <div class="panel_item bg-purple">
          <font-awesome-icon icon="bookmark"></font-awesome-icon>
        </div>
        <div class="panel_item bg-purple">
          <font-awesome-icon icon="list"></font-awesome-icon>
        </div>
        <div class="panel_item bg-purple">
          <font-awesome-icon icon="vote-yea"></font-awesome-icon>
        </div>
        <div class="panel_item bg-purple">
          <a @click="toggleBigger('comment')">
            <font-awesome-icon icon="comment-dots"></font-awesome-icon>
          </a>
        </div>
        <div class="panel_item bg-purple">
          <font-awesome-icon icon="plus-circle"></font-awesome-icon>
        </div>
        <div class="panel_item bg-purple">
          <a @click="toggleBigger('config')">
            <font-awesome-icon icon="cog"></font-awesome-icon>
          </a>
        </div>
        <div class="panel_item bg-purple">
          <font-awesome-icon icon="info-circle"></font-awesome-icon>
        </div>
      </div>

    </el-col>
    <el-col :span="10">
      <div class="chapter_list">
        <div class="infinite-list-wrapper chapter" style="overflow: auto">
          <ul
              v-infinite-scroll="load"
              class="list"
              infinite-scroll-disabled="disabled"
          >
            <li v-for="i in count" :key="i" class="chapter_item">
              <div>
                <div class="chapter-header">
                  <el-divider class="chapter_divide">
                    <p class="title is-4 chapter_title">Chapter {{ i }}</p>
                  </el-divider>
                  <p class="subtitle is-4">lorem lorem</p>
                </div>
                <el-row :gutter="20" class="chapter_detail">
                  <el-col :offset="3" :span="6">
                    <div>TimtimShen</div>
                  </el-col>
                  <el-col :span="6">
                    <div>2000 words</div>
                  </el-col>
                  <el-col :span="6">
                    <div>22-09-2021 21:45:27</div>
                  </el-col>
                </el-row>
                <el-main class="chapter_body">
                  <el-divider>
                    <fa icon="book"></fa>
                  </el-divider>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac mi rutrum, facilisis ex sit
                  amet, venenatis libero. Vivamus vestibulum justo porta tortor laoreet, sit amet luctus metus aliquet.
                  Proin a imperdiet magna, id fermentum purus. Morbi ut magna efficitur, ullamcorper lectus non, finibus
                  odio. Aenean nec sapien quis magna tincidunt sollicitudin. Aliquam eget sollicitudin urna. In aliquet
                  nisi ac dui finibus congue. Fusce fringilla ornare quam, non vehicula sapien facilisis quis. Nunc ac
                  vestibulum enim, vitae volutpat lorem. Duis sit amet rhoncus metus, sit amet vestibulum tellus.
                  Phasellus feugiat massa sit amet magna vestibulum iaculis. Quisque posuere sed tortor sed dignissim.
                  Praesent ut velit a mauris viverra placerat.
                  <br>
                  <br>
                  Nullam ut erat ac ipsum sodales congue vel in erat. Vivamus convallis nulla neque, eget suscipit dolor
                  laoreet ac. Proin vitae nunc ac nisl malesuada accumsan. Nullam eget magna quis augue dignissim
                  ullamcorper sed at libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Nulla vitae dictum nibh. Nullam quis purus ut ligula cursus feugiat. Morbi ultricies
                  velit a porttitor congue.
                  <br>
                  Donec ullamcorper tristique imperdiet. Aliquam feugiat enim a dui lobortis, sit amet facilisis velit
                  lobortis. Morbi ut ex ipsum. Pellentesque elit nisl, tincidunt eu convallis ac, laoreet vulputate
                  ligula. Pellentesque aliquam massa ut neque laoreet dignissim. Nulla at est rutrum tellus scelerisque
                  iaculis quis in lorem. Morbi in lorem non velit commodo bibendum ac eget risus. Aliquam rhoncus eros
                  ac gravida rutrum. Maecenas vitae libero sit amet massa rutrum facilisis quis vitae elit. Fusce leo
                  risus, congue a convallis vehicula, placerat id neque. Sed gravida sem nec sem faucibus finibus. Nunc
                  facilisis nec mauris sit amet varius. Morbi vel tincidunt urna, eu dictum sem. Nunc nec sem ut eros
                  fringilla faucibus a et magna. Donec et ultrices quam. Nam et nunc nec mauris euismod sollicitudin in
                  at urna.
                  <br>
                  Suspendisse ligula mauris, gravida vitae hendrerit a, posuere ut magna. Donec a sagittis libero.
                  Integer quis erat lacus. Nunc mattis pellentesque lectus eu rutrum. Praesent sodales tellus vitae enim
                  auctor lobortis. Curabitur sed sapien at libero vestibulum sollicitudin vel ac dui. Nulla non magna
                  mi. Praesent sodales rhoncus erat malesuada placerat. Aenean ullamcorper pulvinar facilisis. Donec
                  mollis nunc porta justo consectetur sodales. Aenean porttitor odio at elit congue, ut lacinia risus
                  sagittis.
                  <br>
                  Proin vel ex sit amet eros luctus sodales. Vestibulum ut libero gravida, finibus urna et, porttitor
                  lorem. Curabitur pulvinar faucibus magna. In et placerat quam, et pharetra risus. Sed consectetur et
                  risus sit amet tincidunt. Sed vitae nisl neque. Curabitur velit dui, sagittis ut volutpat efficitur,
                  accumsan ut purus. Pellentesque consectetur enim vitae orci bibendum ornare. Ut tristique sapien vitae
                  neque tristique, in sagittis felis porttitor. Praesent aliquet nibh ut erat laoreet, nec consectetur
                  risus suscipit. Maecenas posuere urna cursus, feugiat nisi vitae, malesuada lacus. Nam tincidunt erat
                  a arcu mollis blandit.
                </el-main>
              </div>
            </li>
          </ul>
          <p v-if="loading">Loading...</p>
          <p v-if="noMore">No more</p>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple tab-transition" v-if="comment_show && content_type === 'config'" style="position: fixed">
        <el-form>
          <el-button type="text" @click="toggleBigger">
            <fa icon="times-circle"></fa>
          </el-button>
          <p>Configration</p>
          <el-form-item label="Font Size">
            <el-select v-model="font" placeholder="Font">
              <el-option label="16pt" value="16"/>
              <el-option label="18pt" value="18"/>
              <el-option label="20pt" value="20"/>
              <el-option label="22pt" value="22"/>
              <el-option label="24pt" value="24"/>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <transition name="slide">
        <div class="grid-content bg-purple" v-show="comment_show && content_type === 'comment'" style="position: fixed">
          <div>
            <el-button type="text" @click="toggleBigger">
              <fa icon="times-circle"></fa>
            </el-button>
            <p class="title is-3">Comments</p>
          </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <div class="level-item">
                <el-input style="border-radius: 20px"></el-input>
              </div>
            </div>
          </nav>
          <el-tabs v-model="activeName">
            <el-tab-pane label="User" name="first">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-48x48">
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Sean Brown</strong>
                      <br>
                      Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      <br>
                      <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                    </p>
                  </div>
                </div>
              </article>
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          </el-tabs>
        </div>
      </transition>
    </el-col>

  </el-row>

  <el-backtop :bottom="100">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      <fa icon="chevron-up"></fa>
    </div>
  </el-backtop>
</template>

<script>


export default {
  name: "book_chatper",
  data() {
    return {
      count: 10,
      loading: false,
      comment_show: false,
      font: '',
      content_type: ''
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
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
    toggleBigger(panel_type) {
      this.comment_show = !this.comment_show;
      this.content_type = panel_type
    },
  },
}
</script>

<style lang="scss" scoped>

.body{
  background-color: #f6f6f6;
}


.left_panel{
  position: fixed;
  top: 300px;
}


  .panel_item{
    width: 52.63px;
    height: 52.63px;
    line-height: 52px;
    margin-left: 54px;
    background-color: lightcyan;
  }


.chapter{
  background-color: white;
  padding: 0 50px;

  .chapter_item{
    padding: 50px 0;
    margin: 0 0 30px;
  }


  .chapter_divide{
    color: red;
  }


  .chapter_detail{
    margin-top: 30px;
  }


  .chapter_body{
    padding: 20px 50px;
    text-align: justify;
  }
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}


.grid-content{
  width: 300px;
  text-align: left;
}

</style>
