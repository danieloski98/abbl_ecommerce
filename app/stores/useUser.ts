import { defineStore } from 'pinia'

type User = {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  isLoggedIn: boolean;
}

const useMyUseUserStore = defineStore('user-details', {
  state: () => ({ email: '', id: '', firstName: '', lastName: '', isLoggedIn: false }),
  getters: {
    getName: (state) => state.firstName + ' ' + state.lastName,
    getIsLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    increment() {
      this.email = 'new@email.com'
    }
  }
})

export { useMyUseUserStore }
