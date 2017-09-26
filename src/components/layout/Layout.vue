<template>
  <div class="layout">
    <div class="toolbar">
      <plus-button @click.native="openModal"></plus-button>
    </div>
    <slot></slot>
    <modal name="create-vouchers">
      <create-vouchers @created="closeModal"></create-vouchers>
    </modal>
  </div>
</template>

<script>
import { CreateVouchers } from '../modals'
import { PlusButton } from '../buttons'

export default {
  components: {
    CreateVouchers,
    PlusButton
  },
  methods: {
    openModal () {
      this.$modal.show('create-vouchers')
    },
    closeModal () {
      this.$modal.hide('create-vouchers')
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
