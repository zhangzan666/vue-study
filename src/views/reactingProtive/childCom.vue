<template>
  <div class='wrap'>
    子组件 {{name.value}}
  </div>
</template>

<script>
export default {
  inject: {
    name: {
      from: 'name'
    }
  },
  created(){
    console.log(this.name ,'子组件')
  }
}
</script>
<style>

</style>