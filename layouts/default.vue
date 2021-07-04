<template>
  <div>
    <Navbar />
    <div>{{ about }}</div>
    <!-- <NuxtChild :about="about" /> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      about: ""
    };
  },
  async fetch() {
    this.about = await fetch("https://admin.philliplogan.com/about").then(res =>
      res.json()
    );
  }
};
</script>
