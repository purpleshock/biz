<template>
  <span class="auto-complete" v-click-outside="clear">
    <input type="text" ref="input" @input="waitTimeout" @focus="waitTimeout"></input>
    <div class="suggests-wrapper">
      <ul v-if="hasSuggest" class="suggests-list">
        <li v-for="suggest in suggests" class="suggest">
          <router-link :to="{ path: '/voucher/' + suggest.code }" class="code">
            {{suggest.code}}
          </router-link>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 500
    },
    suggests: Array
  },
  computed: {
    hasSuggest () {
      return this.suggests && this.suggests.length > 0
    }
  },
  methods: {
    waitTimeout () {
      clearTimeout(this.delayId)
      this.delayId = setTimeout(this.getSuggest, this.delay)
    },
    getSuggest () {
      const { value } = this.$refs.input
      if (value) {
        this.$emit('suggest', value)
      } else {
        this.clear()
      }
    },
    clear () {
      if (this.hasSuggest) {
        this.$emit('clear')
      }
    }
  }
}
</script>

<style scoped>
.suggests-wrapper {
  position: relative;
}

.suggests-list {
  background-color: #fff;
  box-shadow: 0 1px 5px #ccc;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
}

.suggest {
  margin: 0;
}

.code {
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  white-space: nowrap;
}
</style>
