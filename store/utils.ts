import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface TSnackbar {
  show: boolean,
  message: string,
  status: string,
  timeout: number
}

@Module({
  name: 'utils',
  namespaced: true,
  stateFactory: true
})
export default class UtilsStore extends VuexModule {
  public snackbar: TSnackbar = {
    show: false,
    message: '',
    status: '',
    timeout: 3000
  }

  @Mutation
  public setSnackbar (snackbar: TSnackbar) {
    this.snackbar = snackbar
  }

  @Mutation
  public closeSnackbar () {
    this.snackbar.show = false
  }
}
