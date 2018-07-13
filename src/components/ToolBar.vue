<template>
  <v-layout row>
    <v-flex xs12>
      <v-text-field
        v-model= "keyword"
        label= "검색어를 입력하세요"
      ></v-text-field>
    </v-flex>
    <v-flex p>
      <v-btn fab dark middle color="blue" v-on:click="passkeyword">
        <v-icon dark style="padding-top: 15px">edit</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import {EventBus} from "../main";

  export default {
        name: "ToolBar",
      data() {
          return {
            keyword: ""
          }
      },
      methods: {
          passkeyword: function() {
            if(this.keyword.length <  2){
              EventBus.$emit("errordialog", "check");
            }
            else{
              console.log("test");
              this.$emit('changekeyword', this.keyword);
              this.keyword = ""
            }
          }
      }
    }
</script>

<style scoped>

</style>
