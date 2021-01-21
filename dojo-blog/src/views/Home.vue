<template>
  <div class="home">
    <p ref="paragraph">My name is {{ name }} and my age is {{ 35 }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  // setup will run before anything else (created(), mounted(), etc...)
  // you CAN NOT use $ref in the setup() function

  setup() {
    // this is undefined
    console.log(this);

    // if these values are changed they will not reflect in the component
    // the data() function would change
    let name = "mario";
    let age = 30;

    // ref will return an object.
    // $ref is similar to document.getElementById
    // this.$ref.paragraph is used in the options api
    // You CAN NOT grab the element before it is returned since it has not rendered yet. That is why it is set to 'null'
    const paragraph = ref(null);

    const handleClick = () => {
      console.log(paragraph, paragraph.value);
      paragraph.value.classList.add("test");
      paragraph.value.textContent = 'Hello, from the handleClick funtion!'
    };

    // variables and functions must be returned
    return {
      name,
      age,
      handleClick,
      paragraph,
    };
  },
};
</script>
