<template>
  <layout>
    <h2>{{$route.params.voucherCode}}</h2>
  </layout>
</template>

<script>
import { mapActions } from 'vuex'
import { GET_VOUCHER } from '../../store/modules/vouchers'
import Layout from '../layout/Layout'

export default {
  components: {
    Layout
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
    this.getVoucher(this.$route.params.voucherCode)
  }
}
</script>