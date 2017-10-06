<template>
  <div class="layout">
    <div class="toolbar">
      <voucher-complete :suggests="suggests" @suggest="getSuggest" @clear="clearSuggest"></voucher-complete>
      <plus-button @click.native="openModal"></plus-button>
    </div>
    <slot></slot>
    <modal name="create-vouchers">
      <create-vouchers @created="closeModal"></create-vouchers>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { CreateVouchers } from '../modals'
import { PlusButton } from '../buttons'
import VoucherComplete from './VoucherComplete'
import { SUGGEST, CLEAR_SUGGEST } from '../../store/modules/vouchers'

export default {
  computed: {
    ...mapState('vouchers', ['suggests'])
  },
  components: {
    CreateVouchers,
    PlusButton,
    VoucherComplete
  },
  methods: {
    ...mapActions('vouchers', {
      getSuggest: SUGGEST,
      clearSuggest: CLEAR_SUGGEST
    }),
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
