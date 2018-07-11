<template>
  <v-layout row wrap align-center>
    <v-flex v-for="lists in topten" style="padding-left: 4px">
      <v-card width="172px" height="295px" color="blue-grey darken-2" class="white--text">
        <v-card-media height="200px" src="../assets/logo.png"></v-card-media>
        <v-card-text>{{lists.title}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "NewsCard",
      props:[ "topten" ],
      mounted() {
        console.log(this.topten);
      }
    }
</script>

<style scoped>

</style>
