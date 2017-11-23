<template>
  <div class="container">
    <br><br>
    <div class="row">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h5 class="panel-title">Title</h5>
        </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            {{ diary.title }}
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
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
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ViewDiary',
  props: ['title', 'contents'],
};
</script>


<style scoped>
.row-eq-height {
    display: flex;
    flex-wrap: wrap;
}
</style>
