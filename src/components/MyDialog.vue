<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      max-width="290">
      <v-card color="white">
        <v-card-title class="headline">Search Error</v-card-title>

        <v-card-text>
          Please Enter over 2 text
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import {EventBus} from "../main";

    export default {
        name: "MyDialog",
      created() {
        EventBus.$on("errordialog", this.showdialog)
      },
      data() {
          return {
            dialog: false
          }
      },
      methods: {
          showdialog: function(val) {
            if(val == "check"){
              this.dialog = true;
            }
          }
      }
    }
</script>

<style scoped>

</style>
