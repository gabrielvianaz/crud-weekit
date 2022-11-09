<template>
  <section>
    <h1>Cadastrar produto</h1>
    <form @submit="cadastrarProduto">
      <label for="nome">Nome do produto:</label>
      <input type="text" id="nome" v-model="nome" required />
      <label for="preco">Preço do produto:</label>
      <input type="number" id="preco" v-model="preco" step="any" required />
      <button>Cadastrar</button>
    </form>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CadastrarView',
  data() {
    return {
      nome: null,
      preco: null,
    };
  },
  computed: mapState(['idProduto']),
  methods: {
    cadastrarProduto(e) {
      e.preventDefault();

      if (this.preco > 0) {
        this.$store.commit('CADASTRAR_PRODUTO', {
          id: this.idProduto,
          nome: this.nome,
          preco: Number(this.preco),
        });
        this.$store.commit('ALTERAR_ID_PRODUTO', this.idProduto + 1);

        alert('Produto cadastrado com sucesso!');

        this.nome = null;
        this.preco = null;
      } else {
        alert('O preço do produto não pode ser negativo!');
      }
    },
  },
};
</script>

<style scoped>
label,
button {
  display: block;
}

label {
  font-weight: bold;
}

input {
  margin-bottom: 10px;
  width: 400px;
}
</style>
