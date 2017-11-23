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
            <input class="form-control" v-model="title"/>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default" v-for="content in contents">
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
    <br><br>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <button
          type="button"
          class="btn btn-default btn-block"
          @click="addContent"
        >
        Add Content
        </button>
      </div>
    </div>
    <br><br>
    <div class="row">
      <button
        type="button"
        class="btn btn-success btn-block"
        @click="createDiary"
      >
      Save Diary
      </button>
    </div>
  </div>
</template>


<script>
import backend from '@/helpers/backend.js';


export default {
  name: 'CreateDiary',
  data() {
    return {
      contents: [
        {
          subtitle: "today's goal",
          text: '1goal, 1assist',
        },
      ],
      title: 'title',
    };
  },
  methods: {
    addContent() {
      this.diary.push({
        subtitle: '',
        text: '',
      });
    },
    createDiary() {
      backend.post('/diaries', {
        title: this.title,
        contents: this.contents,
      }).then(() => {
        this.$router.push('/home/diary');
      });
    },
  },
};
</script>


<style scoped>
.row-eq-height {
    display: flex;
    flex-wrap: wrap;
}
</style>
