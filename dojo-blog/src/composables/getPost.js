import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // this will simulate a delay for a loading spinner
      // the 'reslove' function basically finishes the promise so it is no longer waiting
      await new Promise((resolve) => {
        // 2 seconds
        setTimeout(resolve, 2000);
      });
      let data = await fetch("http://localhost:3000/posts/" + id);
      console.log(data);
      if (!data.ok) {
        throw Error("Post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(err.value);
    }
  };

  return {
    post,
    error,
    load,
  };
};
export default getPost;
