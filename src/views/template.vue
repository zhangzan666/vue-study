<template>
  <div class='wrap'>
    <h1>{{title}}</h1>
    <pre class="discription">
      
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