<template>
  <div>
    <div
      v-if="alert.show"
      :class="`uk-alert-${alert.status}`"
      class="uk-position-fixed alert"
      uk-alert
    >
      <p>{{ alert.message }}</p>
    </div>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Watch } from 'nuxt-property-decorator'
import BaseLayout from '~/core/BaseLayout'
import { utilsStore } from '~/store'

@Component
export default class AuthorizationLayout extends BaseLayout {
  @Watch('alert.show')
  checkAlert (val: boolean) {
    if (val) {
      setTimeout(() => {
        utilsStore.closeSnackbar()
      }, this.alert.timeout)
    }
  }

  get alert () {
    return utilsStore.snackbar
  }
}
</script>
<style lang="scss" scoped>
.alert {
  width: 100%;
}
</style>
