<template>
  <v-layout row wrap align-center>
    <v-flex v-for="lists in topten" style="padding-left: 4px">
      <v-card width="172px" height="275px" color="blue darken-2" style="border-radius: 4px" flat>
        <img src="../assets/small.png" alt="" style="padding-left: 6px">
        <a :href="lists.link" style="text-decoration: none" class="white--text"><v-card-text>{{lists.title}}</v-card-text></a>
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
