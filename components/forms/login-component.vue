<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Login</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <div class="uk-margin">
        <input
          v-model="form.name"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.name }"
          type="text"
          placeholder="Name"
          @input="errors.name = false"
        >
        <input
          v-model="form.password"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.password }"
          type="text"
          placeholder="Phone"
          @input="errors.password = false"
        >
      </div>
    </div>
    <div class="uk-card-footer uk-display-block">
      <button
        class="uk-button uk-button-default uk-text-uppercase"
        @click="login()"
      >Login
      </button>
      <div>
        <nuxt-link to="/registration">
          <button class="uk-button uk-button-text">
            Registration
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BaseComponent from '../../core/BaseComponent'
import { utilsStore } from '~/store'

@Component
export default class LoginComponent extends BaseComponent {
  form = {
    name: '',
    password: ''
  }

  errors = {
    name: false,
    password: false
  }

  login () {
    if (this.checkForm()) {
      utilsStore.setSnackbar({
        show: true,
        message: 'Login error',
        status: 'danger',
        timeout: 3000
      })
    } else {
      utilsStore.setSnackbar({
        show: true,
        message: 'Login error',
        status: 'danger',
        timeout: 3000
      })
    }
  }

  checkForm (): boolean {
    let status = true
    if (!this.form.name) {
      this.errors.name = true
      status = false
    }
    if (!this.form.password) {
      this.errors.password = true
      status = false
    }
    return status
  }
}
</script>
