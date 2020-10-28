<template>
  <div class="container">
    <login-component />
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BasePage from '../core/BasePage'
import LoginComponent from '~/components/forms/login-component.vue'

@Component({
  layout: 'authorization',
  components: {
    LoginComponent
  }
})
export default class LoginPage extends BasePage {

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
