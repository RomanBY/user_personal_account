<template>
  <div class="uk-padding-large">
    <user-card
      v-for="(card, key) in cards"
      :key="key"
      :item="card"
    />
  </div>
</template>
<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import BasePage from '../core/BasePage'
import UserCard from '~/components/cards/user-card.vue'
import { IUser } from '~/app/interfaces/user'

@Component({
  components: {
    UserCard
  }
})
export default class UsersPage extends BasePage {
  cards: IUser[] = [
    {
      img: require('static/images/are1101191.jpg'),
      title: 'developer',
      content: 'Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: require('static/images/are1101192.jpg'),
      title: 'developer',
      content: 'Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: require('static/images/are1101193.jpg'),
      title: 'developer',
      content: 'Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: require('static/images/are1101191.jpg'),
      title: 'developer',
      content: 'Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: require('static/images/are1101192.jpg'),
      title: 'developer',
      content: 'Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
}
</script>
