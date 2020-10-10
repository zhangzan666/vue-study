<template>
  <div class="layout">
    <div class="nav">
      <router-link v-for="item in routeList" :key="item.path" :to='item.path' :class="['el_a',{active:item.path === $route.path}]" >{{item.meta ? item.meta.title : "首页"}}</router-link>
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      routeList:[]
    }
  },
  mounted(){
    this.routeList = this.$router.options.routes
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  .nav {
    width: 120px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 2px solid rgba(130, 174, 199, 0.876);
    align-items: center;
    .el_a {
      line-height: 30px;
      margin-top: 5px;
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .active {
      background-color: #333;
      color: #fff;
    }
  }
  .view {
    flex: 1;
  }
}
</style>
