<template>
  <div class="refs">
    <p ref="paragraph">My name is {{ name }} and my age is {{ age }}</p>
    <p ref="reactiveParagraph">
      My name is {{ refName }} and my age is {{ refAge }}
    </p>
    <button @click="handleClick">Nonreactive click</button>
    <button @click="handleReactiveClick">Reactive click</button>
    <button @click="refAge++">Add 1 to refAge (Reactive)</button>

    <!-- v-model will update the value of refName -->
    <input type="text" v-model="refName" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Refs",
  // setup will run before anything else (created(), mounted(), etc...)
  // you CAN NOT use $ref in the setup() function

  setup() {
    // this is undefined
    console.log(this);

    // if these values are changed they will not reflect in the component because they are NOT reactive by default
    // the data() function would change becuase it is reactive by default
    let name = "mario";
    let age = 35;

    // these values will change because they are wrapped in ref which makes them reacive
    let refName = ref("yoshi");
    let refAge = ref(30);

    // ref will return an object.
    // $ref is similar to document.getElementById
    // this.$ref.paragraph is used in the options api
    // You CAN NOT grab the element before it is returned since it has not rendered yet. That is why it is set to 'null'
    const paragraph = ref(null);
    const reactiveParagraph = ref(null);

    const handleClick = () => {
      // console.log(paragraph, paragraph.value);
      // paragraph.value.classList.add("test");
      // paragraph.value.textContent = "Hello, from the handleClick funtion!";

      // this will NOT update in the DOM because it is not reactive
      console.log("this is NOT reactive so it did not update");
      name = "luigi";
    };

    const handleReactiveClick = () => {
      console.log("this IS reactive so it did update");
      // this WILL update in the DOM because it is not reactive
      refName.value = "luigi";
      refAge.value = "35";
    };

    // variables and functions must be returned
    return {
      name,
      age,
      refName,
      refAge,
      handleClick,
      handleReactiveClick,
      paragraph,
    };
  },
};
</script>
