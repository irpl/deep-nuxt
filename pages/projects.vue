<template>
  <main>
    <section class="container">
      <div class="deep">
        <h1>Projects</h1>
        <span>Stuff I made and stuff I helped to make</span>
      </div>
      <div v-for="(project, index) in projects" :key="index">
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">{{ project.title }}</span>
            <a :href="`https://${project.link}`">{{ project.link }}</a>
          </div>
          <div class="doop-body" v-html="project.description"></div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  props: ["projects"]
};
</script>
