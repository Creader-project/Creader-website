<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <h1 class="title is-3 page_title">Statment</h1>
      <h4 class="title is-4">
        Where your transaction histroy states
      </h4>

      <div class="columns">
        <div class="column">
          <el-table style="width: 100%">
            <el-table-column prop="date" label="Date" sortable width="180" />
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="desc" label="Description" width="180" />
            <el-table-column prop="amount" label="Amount" width="180" />

          </el-table>
        </div>
      </div>

    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  name: "user_statement"
}
</script>

<style scoped>

</style>