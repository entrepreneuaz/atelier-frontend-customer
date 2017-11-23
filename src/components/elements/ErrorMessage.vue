<template>
  <div class="panel panel-danger">
    <div class="panel-body">
      {{ message }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'ErrorMessage',
  props: ['message'],
};
</script>


<style scoped>

</style>
