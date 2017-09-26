<template>
  <div class="layout">
    <div class="toolbar">
      <plus-button @click.native="openModal"></plus-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PlusButton } from '../buttons'

export default {
  components: {
    PlusButton
  },
  methods: {
    openModal () {
      
    }
  }
}
</script>

<style scoped>
.toolbar {
  align-items: center;
  display: flex;
}
</style>
