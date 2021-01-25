import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // this will simulate a delay for a loading spinner
      // the 'reslove' function basically finishes the promise so it is no longer waiting
      await new Promise((resolve) => {
        // 2 seconds
        setTimeout(resolve, 2000);
      });
      let data = await fetch("http://localhost:3000/posts");
      console.log(data);
      if (!data.ok) {
        throw Error("non data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(err.value);
    }
  };

  return {
    posts,
    error,
    load,
  };
};
export default getPosts;
