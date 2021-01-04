<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- binding is better because you may change the url of the route but not the name -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="foward">Go Foward</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      // adds a new route to history
      this.$router.push({name: 'Home'})
    },
    back() {
      // rotuer is different than route
      // -1 will redirect you the the previous page in history
      this.$router.go(-1)
    },
    foward() {
      this.$router.go(1)
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #fff;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
