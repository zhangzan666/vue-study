<template>
  <div class='wrap'>
    <h1>{{title}}</h1>
    <pre class="discription">
      需要用到JavaScript 的全部编程能力, 可以使用render 函数

      RenderFunction 
      example:
        render() {
          const { h } = Vue

          return h(
            'h' + this.level, tag Name
            {}, props
            this.$slots.default()
            )
        }
      
      h()函数是一个创建VNodes的工具。 接收三个参数
    </pre>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: this.$route.meta.title
    }
  }
}
</script>

<style>

</style>