<template>
  <div class="container">
    <br><br>
    <div class="row">
      <div class="col-md-12">
        <button
          type="button"
          class="btn btn-default btn-block"
          @click="createDiary"
        >
        Create Diary
        </button>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="panel panel-default" v-for="(diary, index) in diaries">
        <div class="panel-heading" type="button">
          <span class="panel-title">
            【{{ diaryDate(diary.diaryId) }}】　{{ diary.title }}
          </span>
          <button
            class="btn btn-default"
            type="button"
            @click="showDiary(index)">
            詳細
          </button>
        </div>
        <div class="panel-body" v-if="visible[index]">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default" v-for="content in diary.contents">
                  <div class="panel-heading">
                    <h5 class="panel-title">
                      {{ content.subtitle }}
                    </h5>
                  </div>
                  <div class="panel-body">
                    {{ content.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment';
import backend from '@/helpers/backend.js';


export default {
  name: 'Diary',
  data() {
    return {
      diaries: [],
      visible: [],
    };
  },
  created() {
    backend.get('/diaries')
      .then((response) => {
        this.diaries = response.data.reverse();
        for (let i = 0; i < this.diaries.length; i += 1) {
          this.visible.push(false);
        }
      });
  },
  methods: {
    createDiary() {
      this.$router.push('/home/diary/new');
    },
    showDiary(index) {
      const newvalue = this.visible[index] === false;
      return this.visible.splice(index, 1, newvalue);
    },
    diaryDate(diaryId) {
      return moment(diaryId).format('YYYY/MM/DD');
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
