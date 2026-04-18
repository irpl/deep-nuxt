<template>
  <div class="resume-exp-table">
    <div class="resume-exp-table-body">
      <span class="resume-exp-table-position">{{ position }}</span>
      <div v-if="where || duration" class="resume-exp-table-subtitle">{{ where + " | " + duration }}</div>
      <nuxt-content :document="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["duration", "where", "position", "body"]
};
</script>
<style>
.resume-exp-table {
  margin-bottom: 16px;
}
.resume-exp-table-position {
  font-size: 16px;
  font-weight: 700;
  display: block;
}
.resume-exp-table-subtitle {
  font-size: 13px;
  color: #555;
  margin-bottom: 4px;
}
.resume-exp-table-body ul {
  padding-left: 18px;
  margin-top: 2px;
}
.resume-exp-table-body li {
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 1.5;
}
</style>
