import Vue from 'vue'
import document from 'global/document'

export default {
  install (Vue) {
    Vue.directive('click-outside', {
      bind (el, binding, vnode) {
        vnode.context.onDocumentClicked = e => {
          let node = e.target
          while (node && node !== document.body) {
            if (node === el) {
              return
            }
            node = node.parentNode
          }
          binding.value.call(vnode.context)
        }

        document.addEventListener('click', vnode.context.onDocumentClicked)
      },
      unbind (el, binding, vnode) {
        document.removeEventListener('click', vnode.context.onDocumentClicked)
      }
    })
  }
}


