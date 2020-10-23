<template>
  <div class="wrap">
    <h1 class="wrap">{{title}}</h1>
    <pre class="discription">
      将目标元素, 传送至某个节点后 , 
        teleport 标签 包裹目标元素 , 使用to 属性 某个节点 的tagName 或className 或id 
    </pre>
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