<template>
  <div class="wrap">
    <h1 class="wrap">{{title}}</h1>
    <pre class="discription">
      全局:
        Vue.vreateApp({}).directive('focus',{
          mounted(el) {
            el.focus()
          }
        })
      组件里注册:
        export default {
          directives:{
            focus: {
              mounted(el){
                el.focus()
              }
            }
          }
        }
      directive 的命令都可以动态使用key 与 value
    </pre>
    <h2>example</h2>
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: this.$route.meta.title
    }
  },
}
</script>

<style>

</style>