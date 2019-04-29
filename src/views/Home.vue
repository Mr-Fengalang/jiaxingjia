<template>
  <div class="home">
    <div class="banner">
      <el-tabs v-model="activeName" class="w500" @tab-click="handleClick">
          <el-tab-pane label="用户管理"  name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <div>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-tabs>

      <!-- <img src="../assets/topic_2caae05ab97d8ef2f66d2ae08266e993.png" alt="" srcset=""> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data(){
    return{
    activeName:"first",
    input3:''
    }
  },
  components: {},
  methods:{
    handleClick(){

    }
  }
};
</script>
<style scoped>
.banner {
  min-width: 1000px;
  min-height: 500px;
  overflow: hidden;
  background: url("../assets/topic_2caae05ab97d8ef2f66d2ae08266e993.png")
    no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner img {
  width: 100%;
}
.w500{
  width: 500px;
}
</style>

