<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["mario", "luigi", "toad", "bowser", "koopa", "peach"]);

    // every time the search function changes it will run the function in the second argument
    watch(search, () => {
      console.log("watch funtion run");
    });

    // runs initially on setup but not again if there is not a second argument (what to watch)
    // similar to useEffect
    watchEffect(() => {
      console.log("watchEffect function run", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingNames };
  },
};
</script>

<style></style>
