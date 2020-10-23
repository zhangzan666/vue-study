<template>
  <div class='wrap'>
    <h1>Non-prop-attribute</h1>
    <pre>
      递给组件的属性或事件监听器，但在道具或发射中没有定义相应的属性
        class
        style
        id
      可以通过$attrs 来访问
      <date-picker data-status='activated' @change='submitChange'/>
      <hr>
    </pre>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    DatePicker: defineAsyncComponent(()=> import ('./datePicker'))
  },
  methods: {
    submitChange(vnode) {
      console.log(vnode.$attrs)
    }
  }
}
</script>

<style>

</style>