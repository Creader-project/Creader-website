<template>
  <div>
    <h1 class="title is-3 page_title">Bookcase</h1>
    <!--      <nav class="level">-->
    <!--        <div class="level-left">-->
    <!--          <div class="level-item">-->
    <!--            <el-tabs>-->
    <!--              <el-tab-pane label="My Bookcase" name="first"></el-tab-pane>-->
    <!--              &lt;!&ndash;                <el-tab-pane label="Recent view" name="second"></el-tab-pane>&ndash;&gt;-->
    <!--            </el-tabs>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="level-right">-->
    <!--          <div class="level-item">-->
    <!--            <el-button type="primary" circle>-->
    <!--              <font-awesome-icon :icon="['fas', 'pen-square']"/>-->
    <!--            </el-button>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </nav>-->
    <!--      <div class="bookshelf">-->
    <!--        <ul class="bookshelf_wrapper">-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--          <li class="bookshelf_item">-->
    <!--            <el-empty :image-size="100"></el-empty>-->
    <!--            <div>-->
    <!--              <h5 class="title is-5">-->
    <!--                This is a test-->
    <!--              </h5>-->
    <!--              <p>Progress: 0%</p>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <el-table :data="book_case" type="index" style="width: 100%">
      <el-table-column
          type="index"
          width="100"/>
      <el-table-column prop="book_name" label="Book Name"/>
      <el-table-column prop="book_author" label="Book author"/>
      <el-table-column prop="last_update" label="Last updated"/>
      <el-table-column prop="book_name" label="Book Name"/>
      <el-table-column label="Removal">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="delFavFromShelves(scope.$index, scope.row.id)"
          >Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-alert
        title="Book removed"
        type="success"
        v-if="successMsg"
        show-icon
    ></el-alert>
    <el-alert
        title="Book removed error"
        type="success"
        v-if="successMsg"
        show-icon
    ></el-alert>
  </div>
</template>

<script>
import axios from "axios";
import {ElMessageBox} from "element-plus";

export default {
  created() {
    this.getBooksForCase();
  },
  data() {
    return {
      book_case: [],
      successMsg: false,
      errorMsg: false
    }
  },
  methods: {
    getBooksForCase() {
      axios
          .get('http://127.0.0.1:8000/api/v1/bookcase/add/')
          .then((response) => {
            console.log(response.data);
            this.book_case = response.data;
          })
          .catch((err) => {
            console.error(err);
          })
    },
    delFavFromShelves(index, id) {
      ElMessageBox.confirm('Are you sure to close this dialog?')
          .then(() => {
            axios.delete(`http://127.0.0.1:8000/api/v1/bookcase/delete/${id}`).then((response) => {
              if (response.status === 200) {
                this.books.splice(index, 1);
                this.successMsg = true;
              }
            }).catch((error) => {
              console.log(error);
            })
          })
          .catch(() => {
            // catch error
            this.errorMsg = true;
          })
    }
  },
  name: "user_book_case",

}
</script>

<style lang="scss" scoped>
.page_title {
  text-align: left;
  padding: 10px 10px 0px 10px;
}

.bookshelf {
  margin: 0;

  .bookshelf_wrapper {
    flex-wrap: wrap;
    display: flex;

    .bookshelf_item {
      flex: 1 0 25%;
    }
  }

}

</style>
