<template>
  <div class="create-vouchers">
    <form @submit.prevent="submitForm">
      <div class="form-field">
        <label for="num-voucher">Number of vouchers</label>
        <input id="num-voucher" type="text" v-model.lazy.number="numVouchers"></input>
      </div>
      <div class="form-field">
        <label for="voucher-amount">Voucher amount</label>
        <input id="voucher-amount" type="text" v-model.lazy.number="voucherAmount"></input>
      </div>
      <input type="submit" value="create" :disabled="!isValid"></input>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { UPDATE, SUBMIT } from '../../store/modules/vouchersEditor'

export default {
  computed: {
    ...mapGetters('vouchersEditor', [
      'isValid'
    ]),
    numVouchers: {
      get () {
        return this.$store.state.vouchersEditor.numVouchers
      },
      set (value) {
        this.update({ field: 'numVouchers', value })
      }
    },
    voucherAmount: {
      get () {
        return this.$store.state.vouchersEditor.voucherAmount
      },
      set (value) {
        this.update({ field: 'voucherAmount', value })
      }
    }
  },
  methods: {
    ...mapMutations('vouchersEditor', {
      update: UPDATE
    }),
    ...mapActions('vouchersEditor', {
      submit: SUBMIT
    }),
    submitForm () {
      this.submit().then(() => this.$emit('created'))
    }
  }
}
</script>

<style scoped>
.create-vouchers {
  padding: 35px 40px;
}

.form-field + .form-field {
  margin-top: 10px;
}
</style>
