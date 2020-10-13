<template>
    <div class='wrap'>
      <input type="text" v-bind='$attrs' @vnodeMounted="myHook">
    </div>
</template>

<script>
console.log(new Date())
export default {
  // inheritAttrs:false,
  created() {
    console.log(this.$attrs ,'$attrs')
  },
  // onVnodeMounted(vnode){
  //   console.log(vnode,2)
  // },
  methods: {
    myHook(vnode){
      console.log(vnode)
    }
  }
} 
</script>

<style>

</style>