import { createStore } from 'vuex';
// import type { StoreOptions } from 'vuex';
const store = createStore({
  state: () => {
    return {
      name: 'xx'
    };
  }
});

export default store;
