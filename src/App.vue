<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },

  // Código a ser implementado caso dê tempo. Armazenamento das informações no LocalStorage

  mounted() {
    if (localStorage.produtos) {
      JSON.parse(localStorage.produtos).forEach((produto) => {
        this.$store.commit('CADASTRAR_PRODUTO', produto);
      });
    }
    if (localStorage.idProduto) {
      this.$store.commit('ALTERAR_ID_PRODUTO', Number(localStorage.idProduto));
    }
  },
};
</script>

<style></style>
