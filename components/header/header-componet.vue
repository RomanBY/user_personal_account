<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

      <ul class="uk-navbar-nav">
        <li
          v-for="(item, key) in menu"
          :key="key"
        >
          <nuxt-link
            :to="item.link"
            active-class="active"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav uk-margin-right">
        <li
          class="exit"
          @click="exit()"
        >Exit</li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BaseComponent from '../../core/BaseComponent'
import { profileStore } from '~/store'

@Component
export default class HeaderComponent extends BaseComponent {
  menu = [
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Users',
      link: '/users'
    }
  ]

  exit () {
    profileStore.deleteProfileData()
    this.$store.commit('setAuth', false)
    this.$router.push('/login')
  }
}
</script>
<style lang="scss" scoped>
.active {
  color: black;
  text-decoration: underline;
}

.exit {
  cursor: pointer;
}
</style>
