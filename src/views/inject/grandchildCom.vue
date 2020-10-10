<template>
  <div class='wrap'>
    我是子组件的子组件 <br>
    {{message}} <br>
    {{message1}}
  </div>
</template>

<script>
export default {
  inject: {
    message: {
      from :'message'
    },
    message1:{
      from:'message1'
    }
  }
}
</script>

<style>

</style>