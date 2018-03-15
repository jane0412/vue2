<template>
  <div id="secondcomponent">
    <h1>I an another page</h1>
    <a>writtern by {{author}}</a>
    <ul>
      <li v-for="article in articles" class="second-li">
        {{article.title}}
      </li>
    </ul>
    <p>本样例前期参考<a href="https://www.jianshu.com/p/5ba253651c3b" target="_blank">Vue2.0 新手完全填坑攻略——从环境搭建到发布</a>实现</p>
    <!--<p>感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>-->
  </div>
</template>
<script>
  export default {
    data(){
      return{
        author: "微信公众号 Jane",
        articles: [{
          title: 'aaaaaaaa'
        },{
          title: 'bbbbbbbb'
        },{
          title: 'cccccccc'
        }]
      }
    },
    mounted: function() {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

      }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
      });
    }
  }
</script>
<style>

</style>
