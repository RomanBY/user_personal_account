import { Store } from 'vuex'
import { initialiseStores } from '~/app/utils/storeInitialisation'

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/app/utils/storeInitialisation'

export const state = () => {
  return {
    isAuth: false
  }
}

export const mutations = {
  setAuth (state: { isAuth: boolean }, val: boolean) {
    state.isAuth = val
  }
}
