<template>
  <section>
    <NavBar/>
    <router-view/>
  </section>
</template>


<script>
import NavBar from './elements/NavBar.vue';


export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>


<style scoped>
.row-eq-height {
    display: flex;
    flex-wrap: wrap;
}
</style>
