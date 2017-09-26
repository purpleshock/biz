<template>
  <layout>
    <h2>Created Last Month</h2>
    <div v-if="lastMonthRecordsReady && !lastMonthHasActivities">No activies within last month</div>
  </layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_DASHBOARD } from '../../store/modules/dashboard'
import Layout from '../layout/Layout'

export default {
  components: {
    Layout
  },
  computed: {
    ...mapGetters('dashboard', [
      'lastMonthRecordsReady',
      'lastMonthHasActivities'
    ])
  },
  methods: {
    ...mapActions('dashboard', {
      getDashboard: GET_DASHBOARD
    })
  },
  mounted () {
    this.getDashboard()
  }
}
</script>