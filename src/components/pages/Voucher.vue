<template>
  <layout>
    <h2>{{voucher.code}}</h2>
  </layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_VOUCHER } from '../../store/modules/vouchers'
import Layout from '../layout/Layout'

export default {
  components: {
    Layout
  },
  computed: {
    ...mapState('vouchers', {
      voucher: 'detail'
    })
  },
  methods: {
    ...mapActions('vouchers', {
      getVoucher: GET_VOUCHER
    })
  },
  mounted () {
    this.getVoucher(this.$route.params.voucherCode)
  },
  updated () {
    debugger
    // this.getVoucher(this.$route.params.voucherCode)
  }
}
</script>