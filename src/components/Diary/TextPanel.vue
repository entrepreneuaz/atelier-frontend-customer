<template>
  <div class="panel panel-default" v-for="content in diary">
    <div class="panel-heading">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <input class="form-control" v-model="content.subtitle"/>
        </div>
      </div>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <textarea
            class="form-control"
            v-model="content.text">
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TextPanel',
  props: ['title', 'text'],
};
</script>


<style scoped>

</style>
