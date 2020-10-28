<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BasePage from '../core/BasePage'

@Component({
  middleware ({ redirect }) {
    return redirect('/profile')
  }
})
export default class IndexPage extends BasePage {

}
</script>
