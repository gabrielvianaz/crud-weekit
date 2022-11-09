import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { produtos: [], idProduto: 1 },
  getters: {},
  mutations: {
    CADASTRAR_PRODUTO(state, payload) {
      state.produtos.push(payload);
      localStorage.produtos = JSON.stringify(state.produtos);
    },

    ALTERAR_ID_PRODUTO(state, payload) {
      state.idProduto = payload;
      localStorage.idProduto = state.idProduto;
    },

    ALTERAR_PRODUTO(state, payload) {
      state.produtos.forEach((produto) => {
        if (produto.id === payload.id) {
          (produto.nome = payload.nome),
            (produto.preco = Number(payload.preco));
        }
      });

      localStorage.produtos = JSON.stringify(state.produtos);
    },

    EXCLUIR_PRODUTO(state, payload) {
      state.produtos.forEach((produto, index) => {
        if (produto.id === payload) {
          state.produtos.splice(index, 1);
        }
      });

      localStorage.produtos = JSON.stringify(state.produtos);
    },
  },
  actions: {},
  modules: {},
});
