<template>
  <v-layout row wrap align-center>
    <v-flex v-for="item, index in top">
      <v-card width="900px" height="40px" style="line-height: 10px;">
        <a :href="item.link" style="text-decoration: none; color: black;"><v-card-text>{{index + 1}} {{item.title}}</v-card-text></a>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "NewsList",
      props: ["top"]
    }
</script>

<style scoped>

</style>
