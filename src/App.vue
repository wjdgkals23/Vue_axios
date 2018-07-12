<template>
  <div id="app" v-cloak>
    <toolbar v-on:changekeyword="research"></toolbar>
    <news-header :topten="childtopten"></news-header>
    <news-list :top="childtophun" style="box-shadow: 3px 3px 3px 3px grey"></news-list>
  </div>
</template>

<script>
import NewsHeader from './components/NewsHeader'
import NewsList from './components/NewsList'
import Toolbar from './components/ToolBar'
import axios from 'axios'
import cleanstr from './additional_js/cleanstring'
let clientId = "Wzni9HxwGgrYu4oYY1Sh";
// let clientId = "clientid";
let clientSecret = "5VCrzJbZOd";
// let clientSecret = "clientsecret";
export default {
  name: 'App',
  components: {
    NewsHeader, NewsList, Toolbar
  },
  data() {
    return {
      list: [],
      description: [],
      link: [],
      date: [],
      keyword: "세금",
      childtophun: [],
      childtopten: [],
      arr1: [],
      arr2: []
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    research: function(value) {
      console.log("change");
      this.keyword =  value;
      this.childtopten = [];
      this.childtophun = [];
      this.search();
    },
    search: function() {
      this.list = [];
      this.link = [];
      this.description = [];
      this.date = [];
      this.arr1 = [];
      this.arr2 = [];
      axios({
        method: "get",
        url: "/naversearch",
        params: {
          query: this.keyword,
          display: "100"
        },
        crossDomain: true,
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret
        }
      }).then((result) => {
        console.log(result);
        for(let i in result.data.items){
          let title = cleanstr(result.data.items[i].title, "title");
          let description = cleanstr(result.data.items[i].description, "description");
          let date = cleanstr(result.data.items[i].pubDate, "date");
          let link = result.data.items[i].originallink;
          let temp = { title: title, description: description, date: date, link: link };
          if(i < 10){
            if(i<5){
              this.list.push(title);
              this.description.push(description);
              this.date.push(date);
              this.link.push(link);
              this.arr1.push(temp);
            }
            else{
              this.list.push(title);
              this.description.push(description);
              this.date.push(date);
              this.link.push(link);
              this.arr2.push(temp);
            }
          }
          else{
            this.list.push(title);
            this.description.push(description);
            this.date.push(date);
            this.link.push(link);
          }
          this.childtophun.push(temp);
        }
        this.childtopten.push(this.arr1);
        this.childtopten.push(this.arr2);
      })
    }
  }
}
</script>

<style>
  [v-cloak] { display:none }
  #app {
    width: 900px;
    margin: 10px auto;
  }
</style>
