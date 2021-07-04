<template>
  <header class="navbar">
    <div class="content-wrapper">
      <router-link to="/">
        <div class="logo">
          <div class="nav-title">phillip logan</div>
          <div class="nav-subtitle">something</div>
        </div>
      </router-link>
      <div class="navs">
        <router-link to="/"
          ><div class="nav-btn" :class="{ active: currentRoute === 'index' }">
            about
          </div></router-link
        >
        <router-link to="/projects"
          ><div
            class="nav-btn"
            :class="{ active: currentRoute === 'projects' }"
          >
            projects
          </div></router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.navbar {
  padding: 1rem 0;
  max-width: 630px;
  margin: 0 auto;
}
.navs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-btn {
  height: 80%;
  margin-left: 1.5rem;
  padding: 0 1rem;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .nav-btn {
    margin-left: unset;
  }
}
.active {
  background-color: black;
  border-radius: 5px;
  color: white;
  padding: 1em;
}
.nav-title {
  display: block;
  font-weight: 300;
  font-size: 1.2rem;
  color: #35495e;
  letter-spacing: 1px;
}
.nav-subtitle {
  font-weight: 300;
  font-size: 0.9rem;
  color: #526488;
  word-spacing: 5px;
}
.content-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  .content-wrapper {
    display: block;
  }
}
</style>
