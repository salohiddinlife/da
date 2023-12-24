import { createStore } from "vuex";

const store = createStore({
  state: {
    products: null,
  },
  mutations: {
    getImgs(state, payload) {
      state.products = payload;
    },
    addImg(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    async getImgs({ commit }) {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const result = await response.json();
        commit(
          "getImgs",
          result.filter((user) => user.id < 50)
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      const storedProducts = localStorage.getItem("productsData");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }
    ,
  },

  getters: {
    imgFilter(state) {
      return state.products.filter((user) => user.id < 50);
    },
  },
});

export default store;
