<template>
  <main>
    <section class="container">
      <div v-if="about" class="deep">
        <h1>{{ about.title }}</h1>
        <div v-html="mark(about.body)"></div>
      </div>

      <div class="deep">
        <h1>Work</h1>
        <span>Where I've worked</span>
      </div>

      <div v-for="(work, index) in works" :key="index">
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">{{ work.position }}</span>
            <span class="doop-duration">{{ work.duration }}</span>
          </div>
          <div class="doop-where">{{ work.where }}</div>
          <div class="doop-body" v-html="mark(work.description)"></div>
        </div>
      </div>

      <div class="deep">
        <h1>School</h1>
        <div>That^</div>
      </div>

      <div>
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">University of the West Indies, Mona</span>
            <span class="doop-duration">2012 - 2017</span>
          </div>
          <div class="doop-body">Computer Systems Engineering</div>
        </div>
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title"
              >The Wolmer's Trust High School for Boys</span
            >
            <span class="doop-duration">2011 - 2012</span>
          </div>
        </div>
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">St. George's College</span>
            <span class="doop-duration">2005 - 2011</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import marked from "marked";

export default {
  // props: ["works", "about"],
  async asyncData({ $content, params }) {
    const article = await $content("work", params.position).fetch();
    return { article };
  },
  methods: {
    mark(md) {
      return md ? marked(md) : "";
    }
  }
};
</script>

<style></style>
