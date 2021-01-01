<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ words }}</h1>
  <!-- header is a prop just like in react -->
  <!-- you can use the colon to data bind to whatever you want such as the data object -->
  <Modal :header='header' :text="text" theme='sale'/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <!-- ref is similar to a query selector document.getElementById -->
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">click me</button> -->
</template>

<script>
import Modal from './components/Modal'
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // name is not required
  name: "App",
  // any outside components that are imprted need to be mentioned here
  components: {
    // HelloWorld,
    Modal
  },
  data() {
    // must return an object
    return {
      words: "Words from the data function!",
      header: 'Message from app component',
      text: 'Some text from the app component'
    };
  },
  // this = the current component
  methods: {
    handleClick() {
      // $ref = getElementByRefName
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
};
</script>

<style>
/* styles are global (not just for this component) */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
