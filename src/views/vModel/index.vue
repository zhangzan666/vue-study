<template>
  <div class='wrap'>
    <child-com v-model="message"/>v-model绑定的值{{message}}
    <second-child-com v-model:value="message1"/>v-model绑定的值{{message1}}
    <third-child-com v-model:name="info.name" v-model:phone="info.phone" v-model:address="info.address"/>v-model绑定的值<br><span v-for='item in info' :key='item'>{{item}}</span>
    <!-- <fourth-child-com v-model:info="info"/>v-model绑定的值<br><span v-for='item in info' :key='item'>{{item}}</span> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  data(){
    return {
      message: '123',
      message1: '1234',
      info: {
        name:'张三',
        phone:'123465789',
        address:'广州白云区永泰',
      }
    }
  },
  components: {
    childCom: defineAsyncComponent(() => import ('./ChildCom')),
    SecondChildCom: defineAsyncComponent(() => import ('./SecondChildCom')),
    ThirdChildCom: defineAsyncComponent(() => import ('./ThirdChildCom')),
    // FourthChildCom: defineAsyncComponent(() => import ('./FourthChildCom')),
  }
}
</script>

<style>

</style>