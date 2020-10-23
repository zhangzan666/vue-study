<template>
  <div class='wrap'>
    <div class='data-picker' >
      <input type="date"> <br>
      <input type="text" @vnodeMounted='myhook'>
    </div>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  },
  methods: {
    myhook(vnode){
      console.log(vnode)
    }
  }
}
</script>

<style>

</style>