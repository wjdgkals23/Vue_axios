<template>
  <div id="app">
    <toolbar></toolbar>
    <news-header></news-header>
    <news-list></news-list>
  </div>
</template>

<script>
import NewsHeader from './components/NewsHeader'
import NewsList from './components/NewsList'
import Toolbar from './components/ToolBar'
import axios from 'axios'
import cleanstr from './additional_js/cleanstring'
let clientId = "Wzni9HxwGgrYu4oYY1Sh";
let clientSecret = "5VCrzJbZOd";
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
      keyword: "안철수"
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function() {
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
        for(let i in result.data.items){
          this.list.push(cleanstr(result.data.items[i].title));
          this.description.push(cleanstr(result.data.items[i].description));
          this.date.push(cleanstr(result.data.items[i].pubDate));
          this.link.push(result.data.items[i].originallink);
        }
      })
    }
  }
}
</script>

<style>

</style>
