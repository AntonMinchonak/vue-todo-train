<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/notes">Notes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
 mounted() {
      this.$store.dispatch("retriveTodos")
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width:800px;
}

@media (max-width: 799px) {
#app {
max-width:100%;
}
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
