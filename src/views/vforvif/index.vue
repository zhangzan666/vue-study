<template>
  <div class='wrap'>
    <template v-for="item in arr" :key='item.name' >
      <div v-if='item.show'>
        {{item.name}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:[
        {
          name:'zhangzan',
          show:false,
        },
        {
          name:'liangfu',
          show:true,
        },
        {
          name:'lishili',
          show:true,
        },
      ] 
    }
  }
}
</script>

<style>

</style>