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

          <div class="view-switcher no-print">
            <button
              v-for="view in views"
              :key="view"
              class="view-btn"
              :class="{ 'view-btn-active': selectedView === view }"
              @click="selectedView = view"
            >
              {{ view }}
            </button>
          </div>

          <h2><font-awesome-icon icon="fa-solid fa-user" /> Profile</h2>
          <div v-if="blurb">
            <nuxt-content :document="blurb" />
          </div>

          <h2><font-awesome-icon icon="fa-solid fa-code" /> Skills</h2>
          <div v-if="skills" class="skills-section">
            <nuxt-content :document="skills" />
          </div>

          <h2><font-awesome-icon icon="fa-solid fa-briefcase" /> Experience</h2>
          <div v-for="(exp, index) in filteredExperience" :key="'exp-' + index">
            <ResumeBlock
              :duration="exp.duration"
              :where="exp.where"
              :position="exp.position"
              :body="exp"
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
  data() {
    return {
      selectedView: "full",
      views: ["dev", "teacher", "full"]
    };
  },
  async asyncData({ $content }) {
    const experience = await $content("resume/experience").fetch();
    const blurb = await $content("resume/blurb").fetch();
    const skills = await $content("resume/skills").fetch();
    const edu = await $content("resume/education").fetch();
    const hobbies = await $content("resume/hobbies").fetch();
    return {
      experience,
      blurb,
      skills,
      edu,
      hobbies
    };
  },
  computed: {
    filteredExperience() {
      if (this.selectedView === "full") {
        return this.experience.filter(
          (exp) => exp.type !== "archive"
        );
      }
      return this.experience.filter(
        (exp) => exp.type === this.selectedView
      );
    }
  }
};
</script>

<style>
.resume {
  margin: 0 auto;
  max-width: 8.5in;
  padding: 30px 0;
  background-color: white;
}
.resume-container {
  margin: 0 auto;
  width: 90%;
}
.resume-container h2 {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1.5px solid #333;
  padding-bottom: 4px;
  margin-top: 16px;
  margin-bottom: 10px;
}
.resume-container h2 svg {
  margin-right: 6px;
  font-size: 14px;
}
.bottom-block {
  display: flex;
  gap: 24px;
}
.bottom-block-item {
  width: 50%;
}
.resume-container p {
  margin-bottom: 0.5em;
  font-size: 14px;
  line-height: 1.5;
}
.skills-section {
  columns: 2;
  column-gap: 24px;
}
.skills-section p {
  margin-bottom: 0.2em;
  font-size: 13px;
  break-inside: avoid;
}
.view-switcher {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.view-btn {
  padding: 6px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-transform: capitalize;
}
.view-btn-active {
  background-color: black;
  color: white;
  border-color: black;
}
@media print {
  .view-switcher {
    display: none;
  }
  .resume-blurb-table-item {
    width: unset;
  }
  .resume-blurb-table {
    display: flex;
    gap: 16px;
    font-size: 9pt;
  }
  .resume-container h2 {
    margin-top: 12px;
    margin-bottom: 6px;
  }
}
</style>
