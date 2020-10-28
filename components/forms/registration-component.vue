<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Registration</h3>
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
          v-model="form.phone"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.phone }"
          type="text"
          placeholder="Phone"
          @input="errors.phone = false"
        >
        <input
          v-model="form.email"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.email }"
          type="text"
          placeholder="Email"
          @input="errors.email = false"
        >
      </div>
    </div>
    <div class="uk-card-footer uk-display-block">
      <button
        class="uk-button uk-button-default uk-text-uppercase"
        @click="registration()"
      >registration
      </button>
      <div>
        <nuxt-link to="/login">
          <button class="uk-button uk-button-text">
            Login
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BaseComponent from '../../core/BaseComponent'
import { utilsStore, profileStore } from '~/store'

@Component
export default class RegistrationComponent extends BaseComponent {
  form = {
    name: '',
    phone: '',
    email: ''
  }

  errors = {
    name: false,
    phone: false,
    email: false
  }

  registration () {
    if (this.checkForm()) {
      utilsStore.setSnackbar({
        show: true,
        message: 'Registration success',
        status: 'success',
        timeout: 3000
      })
      this.$store.commit('setAuth', true)
      profileStore.setRegistrationData(this.form)
      this.$router.push('profile')
    } else {
      utilsStore.setSnackbar({
        show: true,
        message: 'Registration error',
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
    if (!this.form.phone) {
      this.errors.phone = true
      status = false
    }
    if (!this.form.email) {
      this.errors.email = true
      status = false
    }
    return status
  }
}
</script>
