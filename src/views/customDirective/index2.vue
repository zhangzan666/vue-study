<template>
  <div class='wrap'>
    <child-com v-focus @vnodeMounted='myHook' />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      },
    }
  },
  methods: {
    myHook(vnode){
      console.log(vnode)
    }
  },
  components: {
    ChildCom: defineAsyncComponent(()=> import ('./childCom'))
  }
}
</script>

<style>

</style>