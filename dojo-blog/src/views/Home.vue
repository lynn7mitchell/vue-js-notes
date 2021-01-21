<template>
  <h1>Home</h1>
  <PostList :posts="posts" v-if='showPosts' />
  <button @click="showPosts = !showPosts">toggle posts</button>    
  <button @click="posts.pop()">delete a post!</button>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body:
          "Bacon ipsum dolor amet sausage pig beef turkey strip steak. Short ribs shank spare ribs, turducken flank beef boudin. Shank kielbasa chislic prosciutto beef shankle. Swine landjaeger jerky tail shank, kielbasa buffalo doner salami shoulder cupim ground round frankfurter beef ribs. Swine fatback meatloaf ground round, hamburger ball tip pork loin kevin. Biltong beef turducken, brisket meatball picanha meatloaf doner leberkas jerky andouille sirloin shoulder.",
        id: 1,
      },
      {
        title: "top 5 CSS tips",
        body:
          "Bacon ipsum dolor amet sausage pig beef turkey strip steak. Short ribs shank spare ribs, turducken flank beef boudin. Shank kielbasa chislic prosciutto beef shankle. Swine landjaeger jerky tail shank, kielbasa buffalo doner salami shoulder cupim ground round frankfurter beef ribs. Swine fatback meatloaf ground round, hamburger ball tip pork loin kevin. Biltong beef turducken, brisket meatball picanha meatloaf doner leberkas jerky andouille sirloin shoulder.",
        id: 2,
      },
    ]);

    const showPosts = ref(true)

    return { posts, showPosts };
  },
};
</script>

<style></style>
