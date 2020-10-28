import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import utils from '~/store/utils'
import profile from '~/store/profile'

// eslint-disable-next-line
let utilsStore: utils
// eslint-disable-next-line
let profileStore: profile

function initialiseStores (store: Store<any>): void {
  utilsStore = getModule(utils, store)
  profileStore = getModule(profile, store)
}

export {
  initialiseStores,
  utilsStore,
  profileStore
}
