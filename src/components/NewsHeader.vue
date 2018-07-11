<template>
  <v-carousel class="carousel" hide-delimiters="">
    <v-carousel-item v-for="list in temp">
      <news-flex v-bind:topten="list"></news-flex>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  import NewsFlex from "./NewsFlex"
    export default {
        name: "NewHeader",
      components: { NewsFlex },
      props: [ "topten" ],
      data() {
          return {
            temp: ""
          }
      },
      mounted() {
          this.temp = this.topten;
      }
    }
</script>

<style scoped>
  .carousel {
    height: 300px !important;
  }
</style>
