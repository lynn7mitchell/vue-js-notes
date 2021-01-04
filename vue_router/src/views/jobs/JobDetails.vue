<template>
  <h1>Job Details</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],

//   not needed because props are set to true in index.js
//   data() {
//     return {
//       id: this.$route.params.id,
//     };
//   },
};
</script>

<style></style>
