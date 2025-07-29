<template>
  <main>
    <section>
      <div class="resume">
        <div class="resume-container">
          <div class="resume-banner">

            <div>
              <h1>Phillip Logan</h1>
              <!-- <span>Software Developer</span> -->
            </div>

            <div class="resume-blurb-table">
              <div class="resume-blurb-table-item">
                <font-awesome-icon icon="fa-solid fa-phone" /> +1 876-840-4247
              </div>

              <div class="resume-blurb-table-item">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                phillipllogan@gmail.com
              </div>

              <div class="resume-blurb-table-item">
                <font-awesome-icon icon="fa-solid fa-link" /> 
                philliplogan.com
              </div>
            </div>
          </div>
          
          
          <h2><font-awesome-icon icon="fa-solid fa-user" />Profile</h2>
          <div v-if="blurb" class="">
            <nuxt-content :document="blurb" />
          </div>

          <h2><font-awesome-icon icon="fa-solid fa-briefcase" />Experience</h2>
          <div v-for="(ft, index) in fts" :key="'ft-' + index">
            <ResumeBlock
              :duration="ft.duration"
              :where="ft.where"
              :position="ft.position"
              :body="ft"
            />
          </div>

          <div class="bottom-block">
            <div class="bottom-block-item">
              <h2><font-awesome-icon icon="fa-solid fa-school" /> Education</h2>
              <ResumeBlock
                :duration="edu.duration"
                :where="edu.where"
                :position="edu.position"
                :body="edu"
              />
            </div>
            <div class="bottom-block-item">
              <h2>
                <font-awesome-icon icon="fa-solid fa-puzzle-piece" /> Hobbies
              </h2>
              <div v-if="hobbies" class="">
                <nuxt-content :document="hobbies" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const fts = await $content("resume/experience/ft").fetch();
    const pts = await $content("resume/experience/pt").fetch();
    const blurb = await $content("resume/blurb").fetch();
    const edu = await $content("resume/education").fetch();
    const hobbies = await $content("resume/hobbies").fetch();
    return {
      blurb,
      fts,
      pts,
      edu,
      hobbies
    };
  }
};
</script>

<style>
.resume {
  margin: 0 auto;
  /* grid-gap: 1.5rem; */
  max-width: 9.3in;
  max-width: 8.5in;

  /* height: 13in; */
  padding: 30px 0;
  /* width: 8.5in; */
  background-color: white;
}
.resume-container {
  margin: 0 auto;
  width: 90%;
}
.bottom-block {
  display: flex;
  margin-top: 24px;
}
.bottom-block-item {
  width: 50%;
}
</style>
