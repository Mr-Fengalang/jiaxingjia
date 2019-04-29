<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './views/Home'
export default {
  name: "app",
  components: {
    Header,
    Home
  }
};
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.el-header,.el-main{
  padding: 0
}
.el-header{
  position: fixed;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app{
  min-width: 1000px;
}
</style>
