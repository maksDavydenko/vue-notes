<template>
  <div id="app">
      <nav>
          <router-link class="router-link" to="/">Главная</router-link>
          <router-link  class="router-link" to="/edit">Редактирование заметку</router-link>
          </nav>
      <router-view class="content"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style >
    #app {
      width: 70%;
      max-width: 800px;
      margin: 0px auto;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }
    nav{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    .router-link{
        text-decoration: none;
        padding: 10px;
        margin: 10px;
        border: 1px solid #000;
    }
    .content{
        margin-top: 30px;
    }
    .completed{
        text-decoration: line-through;
        color: #ccc;
    }
</style>
