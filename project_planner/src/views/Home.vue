<template>
  <div class="home">
    <!-- if the projects array has anything in it -->
   <div v-if="projects.length">
     <div v-for="projects in projects" :key="projects.id">
       <p>{{projects.title}}</p>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
 components: {},
 data(){
   return{
     projects: []
   }
 },
//  componentDidMount()
  mounted(){
   fetch('http://localhost:3000/projects')
   .then(res => res.json())
   .then(data => this.projects = data)
   .catch(err => console.error(err.message))
 }
}
</script>
