<template>
  <div>
    <h2>Created Last Month</h2>
    <div v-if="lastMonthRecordsReady && !lastMonthHasActivities">No activies within last month</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_DASHBOARD } from '../../store/modules/dashboard'

export default {
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