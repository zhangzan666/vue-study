<script>
import { h } from 'vue'
// function getChildrenTextContent(children) {
//   return children
//     .map(node => {
//       console.log(node)
//       return typeof node.children === 'string'
//         ? node.children
//         : Array.isArray(node.children)
//         ? getChildrenTextContent(node.children)
//         : ''
//     })
//     .join('')
// }
export default {
  render() {
    console.log(this.$slots.default())
    return h(
      'h' + this.level,
      {},
      [h('div',{},'这个是数组的child'),this.$slots.default()]
    ) 
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>