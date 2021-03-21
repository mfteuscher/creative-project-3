<template>
  <div id="app">
    <div id="header">
      <h1> 50 States Trivia </h1>
    </div>
    <router-view/>
    <footer>
            <a href="https://github.com/mfteuscher/Utah-Jazz-Website" target="_blank">
                <img class="github" src="/images/GitHub-Logo-Dark.png" alt="GitHub Logo">
            </a>
            <p v-html="this.$root.$data.copyright"></p>
        </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  color: white;
  background-color: #42b983;
;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FFFF;
}

footer {
    text-align: center !important;
    padding: 10px 20px;
    background-color: rgb(250,250,250);
    margin-top: 50px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    bottom: 0;
    width: 100%;
}

.github {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}

.github:hover {
    content: url(/images/GitHub-Logo-Light.png)
}
</style>
