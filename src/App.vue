<template>
<<<<<<< HEAD
  <div class="panorama">
    <div class="nav_list">
      <router-link v-for="item in routerList" :key="item.path" :to='item.path'>{{item.meta.title}}</router-link>
    </div>
    <div class="panorama_content">
      <router-view/>
=======
  <div class="layout">
    <div class="nav">
      <router-link v-for="item in routeList" :key="item.path" :to='item.path' :class="['el_a',{active:item.path === $route.path}]"  :title='item.meta ? item.meta.title : "首页"'>{{item.meta ? item.meta.title : "首页"}}</router-link>
    </div>
    <div class="view">
      <router-view />
>>>>>>> b4bc7a1d9b67127575a3513a14ba00419382ebc3
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
<<<<<<< HEAD
      routerList:[]
    }
  },
  mounted(){
    this.routerList = this.$router.options.routes
    this.routerList.map(item=>{
      console.log(item)
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.panorama {
  display: flex;
  background-color: #eee;
  .nav_list {
    height: 100vh;
    width: 120px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #333;
    text-align: center;
  }
  .panorama_content {
    flex: 1;
=======
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
>>>>>>> b4bc7a1d9b67127575a3513a14ba00419382ebc3
  }
  .view {
    flex: 1;
  }
}
</style>
