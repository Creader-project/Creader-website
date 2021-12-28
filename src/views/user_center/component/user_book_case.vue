<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <h1 class="title is-3 page_title">Bookcase</h1>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="My Bookcase" name="first"></el-tab-pane>
              <!--                <el-tab-pane label="Recent view" name="second"></el-tab-pane>-->
            </el-tabs>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <el-button type="primary" circle>
              <font-awesome-icon :icon="['fas', 'pen-square']"/>
            </el-button>
          </div>
        </div>

      </nav>
      <div class="bookshelf">
        <ul class="bookshelf_wrapper">
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
          <li class="bookshelf_item">
            <el-empty :image-size="100"></el-empty>
            <div>
              <h5 class="title is-5">
                This is a test
              </h5>
              <p>Progress: 0%</p>
            </div>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>


</template>

<script>
export default {
  name: "user_book_case",
  data() {
    return {
      book_case: [
        {id: 3, name: 'Bob', age: 27},
        {id: 4, name: 'Frank', age: 32},
        {id: 5, name: 'Joe', age: 38}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page_title{
  text-align: left;
  padding: 10px 10px 0px 10px;
}
.bookshelf{
  margin: 0;
  .bookshelf_wrapper{
    flex-wrap: wrap;
    display: flex;
    .bookshelf_item{
      flex: 1 0 25%;
    }
  }

}

</style>
