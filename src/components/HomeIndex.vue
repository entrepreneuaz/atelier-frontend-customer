<template>
  <section>
    <div class="container">
      <div class="row row-eq-height">
        <div class="col-md-8">
          <div class="row row-eq-height">
            <div class="col-md-12">
              <Trend/>
            </div>
          </div>
          <div class="row row-eq-height">
            <div class="col-md-6">
              <Notice/>
            </div>
            <div class="col-md-6">
              <Information/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <Profile/>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Profile from './elements/Profile.vue';
import Trend from './elements/Trend.vue';
import Notice from './elements/Notice.vue';
import Information from './elements/Information.vue';


export default {
  name: 'HomeIndex',
  components: {
    Profile,
    Trend,
    Notice,
    Information,
  },
};
</script>


<style scoped>
.row-eq-height {
    display: flex;
    flex-wrap: wrap;
}
</style>
