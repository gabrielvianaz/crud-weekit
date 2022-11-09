<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cadastrar">Cadastrar produto</router-link>
    <router-link to="/visualizar">Visualizar produto</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: black;
}

a.router-link-exact-active {
  font-weight: bold;
}

a:hover {
  font-weight: bold;
}
</style>
