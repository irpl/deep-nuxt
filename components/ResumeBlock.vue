<template>
  <div class="resume-exp-table">
    <!-- <div class="resume-exp-table-duration">
      <span class="">{{ duration }}</span>
    </div> -->
    <div class="resume-exp-table-body">
      <span class="resume-exp-table-position"> - {{ position }}</span>
      <!-- <span class="">{{ duration }}</span> -->
      <div class="">{{ where + " | " + duration }}</div>
      <nuxt-content class="" :document="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["duration", "where", "position", "body"]
};
</script>
<style>
.resume-banner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    h1 {
      margin-bottom: 0;
    }
  }
}
.resume-blurb-table {
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* margin: 20px 0; */
}
.resume-blurb-table-item {
  /* width: 400px; */
  margin-bottom: 10px;
}
.resume-exp-table {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

/* .resume-exp-table {
  margin-bottom: 30px;
} */
.resume-exp-table-duration {
  width: 200px;
  padding-top: 7px;
}
.resume-exp-table-duration1 {
  width: 150px;
  padding-top: 7px;
}
.resume-exp-table-position {
  font-size: 20px;
  font-weight: 700;
}
.resume-exp-table-body {
  /* width: 600px; */
  /* max-width: 100%; */
}
.resume-exp-table-body ul {
  padding-left: 18px;
}
/* .resume-exp-table tr {
  vertical-align: top;
} */
</style>
