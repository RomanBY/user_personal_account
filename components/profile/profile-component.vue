<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand uk-position-relative">
          <h3 class="uk-card-title uk-margin-remove-bottom">Profile</h3>
          <div
            :uk-icon="`icon: ${isChange ? 'close' : 'file-edit'}`"
            class="uk-position-top-right icon"
            @click="isChange = !isChange"
          />
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
          :disabled="!isChange"
          @input="errors.name = false"
        >
        <input
          v-model="form.phone"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.phone }"
          type="text"
          placeholder="Phone"
          :disabled="!isChange"
          @input="errors.phone = false"
        >
        <input
          v-model="form.email"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.email }"
          type="text"
          placeholder="Email"
          :disabled="!isChange"
          @input="errors.email = false"
        >
        <input
          v-model="form.address.country"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.country }"
          type="text"
          placeholder="Country"
          :disabled="!isChange"
          @input="errors.country = false"
        >
        <input
          v-model="form.address.city"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.city }"
          type="text"
          placeholder="City"
          :disabled="!isChange"
          @input="errors.city = false"
        >
        <input
          v-model="form.address.street"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.street }"
          type="text"
          placeholder="Street"
          :disabled="!isChange"
          @input="errors.street = false"
        >
        <input
          v-model="form.address.flat"
          class="uk-input uk-margin-bottom"
          :class="{ 'uk-form-danger': errors.flat }"
          type="number"
          placeholder="Flat"
          :disabled="!isChange"
          @input="errors.flat = false"
        >
      </div>
    </div>
    <div
      v-if="isChange"
      class="uk-card-footer uk-display-block"
    >
      <button
        class="uk-button uk-button-default uk-text-uppercase"
        @click="changeProfile()"
      >Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BaseComponent from '../../core/BaseComponent'
import { IProfile } from '~/app/interfaces/profile'
import { utilsStore, profileStore } from '~/store'

@Component
export default class ProfileComponent extends BaseComponent {
  isChange = false
  form: IProfile = {
    name: '',
    phone: '',
    email: '',
    address: {
      country: '',
      city: '',
      street: '',
      flat: null
    }
  }

  errors = {
    name: false,
    phone: false,
    email: false,
    country: false,
    city: false,
    street: false,
    flat: false
  }

  created () {
    this.form = profileStore.profile
  }

  changeProfile () {
    if (this.checkForm()) {
      utilsStore.setSnackbar({
        show: true,
        message: 'Change success',
        status: 'success',
        timeout: 3000
      })
      this.$store.commit('setAuth', true)
      profileStore.setProfileData(this.form)
      this.isChange = false
    } else {
      utilsStore.setSnackbar({
        show: true,
        message: 'Change error',
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
    if (!this.form.address.city) {
      this.errors.city = true
      status = false
    }
    if (!this.form.address.country) {
      this.errors.country = true
      status = false
    }
    if (!this.form.address.street) {
      this.errors.street = true
      status = false
    }
    if (!this.form.address.flat) {
      this.errors.flat = true
      status = false
    }
    return status
  }
}
</script>
<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
