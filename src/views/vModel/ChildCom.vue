<template>
  <div class='wrap'>
    <h1>原生v-model</h1>
    <div>
      <input type="text" :value="modelValue" @input="changeValue">
    </div>
  </div>
</template>

<script>

export default {
  props:{
    modelValue:{
      type:String
    },
    title:{
      type:String
    },
  },
  mounted(){
    
  },
  methods:{
    changeValue(e){
      // console.log(e.target.value)
      this.$emit('update:modelValue',e.target.value)
    }
  },
}
</script>

<style>

</style>