<template>
  <div class="reactive-vs-refs">
    <h1>Home</h1>

    <!-- refs -->
    <h2>Refs</h2>
    <p>{{ refNinja.name }} - {{ refNinja.age }}</p>
    <button @click="updateRefNinja">Update Ref Ninja</button>

    <!-- reactive -->
    <h2>Reactive</h2>
    <p>{{ reactiveNinja.name }} - {{ reactiveNinja.age }} - {{nameTwo}}</p>
    <button @click="updateReactiveNinja">Update Reactive Ninja</button>
  </div>
</template>

<script>
// REFS > REACTIVE
import { ref, reactive } from "vue";

export default {
  name: "ReactiveVsRefs",
  // setup will run before anything else (created(), mounted(), etc...)
  // you CAN NOT use $ref in the setup() function

  setup() {
    // this is undefined
    console.log(this);

    const refNinja = ref({ name: "mario", age: 35 });
    const reactiveNinja = ref({ name: "luigi", age: 34 });

    const nameOne = ref('mario')
    // CAN NOT be updated beacuse a primitive value will not work with reactive()
    const nameTwo = reactive('luigi')

    // you HAVE to use value with refs
    const updateRefNinja = () => {
      refNinja.value.age = 45;
    };
    // you DO NOT use value with reactive
    const updateReactiveNinja = () => {
      reactiveNinja.age = 44;
    //   Will not work because a primitive values will not work with reactive()
      nameTwo = 'yoshi'
    };

    // variables and functions must be returned
    return {
      refNinja,
      reactiveNinja,
      updateRefNinja,
      updateReactiveNinja,
      nameOne,
      nameTwo
    };
  },
};
</script>
