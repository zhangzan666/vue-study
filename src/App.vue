<template>
  <div class="panorama">
    <div class="nav_list">
      <router-link v-for="item in routerList" :key="item.path" :to='item.path'>{{item.meta.title}}</router-link>
    </div>
    <div class="panorama_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
  }
}
</style>
