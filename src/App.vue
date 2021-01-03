<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ words }}</h1>
  <p>Welcome...</p>
  <!-- header is a prop just like in react -->
  <!-- you can use the colon to data bind to whatever you want such as the data object -->
  <teleport to="#modals" v-if="showModal">
    <!-- @close is a custom event listener that was created in Modal.vue -->
    <!-- <Modal :header='header' :text="text" theme='sale' @close="toggleModal"/> -->

    <!-- slots
  
     whatever is inside the Modal tags will show up in a slot tag in the Modal component-->
    <Modal theme="sale" @close="toggleModal">
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <!-- named slots 

      the name of this slot is "links" and will show up in a slot tag with name='links' in the Modal component-->
      <template v-slot:links>
        <a href="#">a link</a>
        <br />
        <a href="#">another link</a>
      </template>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <h1>Modal 2</h1>
      <p>Welcome to modal 2</p>
      <!-- <template v-slot:links>
        <a href="#">a different link</a>
        <br>
        <a href="#">another different link</a>
      </template> -->
    </Modal>
  </teleport>
  <!-- 
    only fire the function if the click is a right click
  
    @click.shift will make the function fire only if the user is holding shift when the button is clicked
   -->
  <button @click.shift="toggleModal">open modal</button>
  <button @click.shift="toggleModalTwo">open modal 2</button>

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
      text: 'Some text from the app component',
      showModal: false,
      showModalTwo: false
    };
  },
  // this = the current component
  methods: {
    handleClick() {
      // $ref = getElementByRefName
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
  toggleModal(){
    this.showModal = !this.showModal
  },
   toggleModalTwo(){
    this.showModalTwo = !this.showModalTwo
  }
},}
</script>

<style>
/* styles are global (not just for this component) */
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
