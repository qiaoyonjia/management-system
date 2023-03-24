import { createStore, useStore as useVuexStore, Store } from 'vuex'

import { IRootState, IStoreType } from './type'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadlocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
