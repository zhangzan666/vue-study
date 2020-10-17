<template>
  <div class='wrap'>
    <h1>子组件</h1>
    <div>
      <input type="text" :value="value" @input="changeValue">
    </div>
  </div>
</template>

<script>
export default {
  
  props:{
    value: {
      type: String,
    }
  },
  setup(props) {
    console.log(props.value)
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