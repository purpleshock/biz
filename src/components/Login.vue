<template>
  <div class="login">
    <form @submit.prevent="login">
      <label class="form-item">
        Mail
        <input
          class="form-input"
          type="text"
          :value="formData.mail"
          @change="change('mail', $event)">
        </input>
      </label>

      <label class="form-item">
        Password
        <input
          class="form-input"
          type="password"
          :value="formData.password"
          @change="change('password', $event)">
        </input>
      </label>

      <input
        type="submit"
        value="Submit"
        :disabled="!isReadyForLogin">
      </input>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { LOGIN, UPDATE } from '../store/modules/user'

export default {
  computed: {
    ...mapState('user', {
      formData: state => {
        return {
          mail: state.mail,
          password: state.password
        }
      }
    }),
    ...mapGetters('user', [
      'isReadyForLogin'
    ])
  },
  methods: {
    ...mapActions('user', {
      login: LOGIN
    }),
    change (field, event) {
      this.$store.commit('user/UPDATE', {
        field,
        value: event.target.value
      })
    }
  }
}
</script>

<style scoped>
.login {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.form-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form-input {
  margin-left: 20px;
}
</style>
