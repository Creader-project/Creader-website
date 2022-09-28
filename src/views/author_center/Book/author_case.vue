<template>
  <el-table :data="bookInfo" style="width: 80%; margin: 0 auto;">
    <el-table-column prop="book_name" label="Book Name" sortable/>
    <el-table-column prop="book_status" label="Book Status"/>
    <el-table-column prop="total_click" label="Total click"/>
    <el-table-column prop="fav_num" label="Total fav"/>
    <el-table-column label="Operation">
      <template slot-scope="scope">
        <el-button @click="toChapter(scope.$index, scope.row.id)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>


  export default {
    name: "author_case",
    data() {
      return {
        bookInfo: []
      }
    },
    created() {
      this.getBook();
    },
    methods: {
      getBook() {
        // get all book info for author
        getAuthorBook().then((response) => {
          this.bookInfo = response.data;
        }).catch(error => {
          console.log(error);
        });
        console.log(this.tableData);
      },
      toChapter(index, id){
        console.log(index);
        console.log(id);
        this.$router.push({name:'chapter_view', params:{book_id: id}});
      }
    }
  }
</script>

<style scoped>

</style>
