<template>
  <div class='wrap'>
    <h1>使用vmodel参数替代Vue2.x 的 组件模型选项</h1>
    <div>
      <input type="text" :value="value" @input="changeValue">
    </div>
  </div>
</template>

<script>

export default {
  props:{
    value:{
      type:String
    },
  },
  mounted(){
    
  },
  methods:{
    changeValue(e){
      // console.log(e.target.value)
      this.$emit('update:value',e.target.value)
    }
  },
}
</script>

<style>

</style>