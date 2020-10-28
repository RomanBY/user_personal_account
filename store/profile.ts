import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IProfile } from '~/app/interfaces/profile'

@Module({
  name: 'profile',
  namespaced: true,
  stateFactory: true
})
export default class ProfileStore extends VuexModule {
  public profile: IProfile = {
    name: '',
    email: '',
    phone: '',
    address: {
      city: '',
      country: '',
      street: '',
      flat: null
    }
  }

  @Mutation
  public setRegistrationData (data: { name: string, phone: string, email: string }) {
    this.profile.name = data.name
    this.profile.phone = data.phone
    this.profile.email = data.email
  }

  @Mutation
  public setProfileData (data: IProfile) {
    this.profile = data
  }

  @Mutation
  public deleteProfileData () {
    this.profile = {
      name: '',
      email: '',
      phone: '',
      address: {
        city: '',
        country: '',
        street: '',
        flat: null
      }
    }
  }
}
