<!-- Header -->
<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      router 
    >
      <el-menu-item class="logo" index="/">
        <img src="../assets/logo.png" alt="" srcset="" />
      </el-menu-item>
      <el-menu-item index="/about">
        二手房
      </el-menu-item>
      <el-menu-item index="2">
        新房
      </el-menu-item>
      <el-menu-item index="3">租房</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: " "
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.logo {
  width: 100px;
}
.logo img {
  height: 100%;
}
</style>