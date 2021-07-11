<template>
  <main>
    <section class="container">
      <div v-if="about" class="deep">
        <nuxt-content :document="about" />
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
          <nuxt-content class="doop-body" :document="work" />
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
export default {
  async asyncData({ $content, params }) {
    const about = await $content("about").fetch();
    const works = await $content("work").fetch();
    return {
      about,
      works
    };
  },
  methods: {
    mark(md) {
      return md ? marked(md) : "";
    }
  }
};
</script>

<style></style>
