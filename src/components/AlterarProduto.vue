<template>
  <form @submit="alterarProduto" v-if="produtos.length">
    <h2>Alterar produto</h2>
    <label for="id">ID do produto</label>
    <input type="text" id="id" v-model="id" required />
    <label for="nome">Nome do produto</label>
    <input type="text" id="nome" v-model="nome" required />
    <label for="preco">Preço do produto</label>
    <input type="text" id="preco" v-model="preco" required />
    <button>Alterar</button>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AlterarProduto',
  data() {
    return {
      id: null,
      nome: null,
      preco: null,
    };
  },
  computed: mapState(['produtos']),
  methods: {
    alterarProduto(e) {
      e.preventDefault();

      if (this.preco > 0) {
        let payload;

        this.produtos.forEach((produto) => {
          if (produto.id === Number(this.id)) {
            payload = {
              id: produto.id,
              nome: this.nome,
              preco: this.preco,
            };
          }
        });

        if (payload) {
          this.$store.commit('ALTERAR_PRODUTO', payload);
          alert('Produto alterado com sucesso!');
          this.id = null;
          this.nome = null;
          this.preco = null;
          this.payload = null;
        }
      } else {
        alert('O preço do produto não pode ser negativo!');
      }
    },
  },
  watch: {
    id() {
      if (Number(this.id)) {
        this.nome = 'Carregando...';
        this.preco = 'Carregando...';

        setTimeout(() => {
          this.produtos.forEach((produto) => {
            if (produto.id === Number(this.id)) {
              this.nome = produto.nome;
              this.preco = produto.preco;
            }
          });
        }, 1000);
      } else {
        this.nome = null;
        this.preco = null;
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
