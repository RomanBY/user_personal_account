<template>
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img :src="item.img" alt="" uk-cover>
      <canvas width="600" height="400"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator'
import BaseComponent from '../../core/BaseComponent'
import { IUser } from '~/app/interfaces/user'

@Component
export default class UserCard extends BaseComponent {
  @Prop({
    type: Object,
    required: true
  }) item!: IUser
}
</script>
