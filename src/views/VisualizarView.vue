<template>
  <section>
    <h1>Visualizar produtos</h1>
    <p v-if="!produtos.length">Não há produtos cadastrados!</p>
    <ul v-else>
      <li v-for="produto in produtos" :key="produto.nome">
        <p>ID: {{ produto.id }}</p>
        <p>Nome: {{ produto.nome }}</p>
        <p>
          Preço:
          {{
            produto.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }}
        </p>
        <button @click="excluirProduto(produto)">Excluir</button>
      </li>
    </ul>
    <AlterarProduto v-if="produtos.length"></AlterarProduto>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import AlterarProduto from '@/components/AlterarProduto.vue';

export default {
  name: 'VisualizarView',
  computed: mapState(['produtos']),
  components: { AlterarProduto },
  methods: {
    excluirProduto(produto) {
      const confirmacao = confirm(
        `Confirma a exclusão do produto ${produto.id} - ${produto.nome}?`
      );

      if (confirmacao) {
        this.$store.commit('EXCLUIR_PRODUTO', produto.id);
        alert('Produto excluído com sucesso!');
      }
    },
  },
};
</script>

<style scoped></style>
