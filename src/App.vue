<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="nav">
      <router-link to="/circle"><i class="fas fa-circle"></i></router-link>
      <router-link to="/square"><i class="fas fa-square"></i></router-link>
      <router-link to="/star"><i class="fas fa-star"></i></router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "./reset.css";
@import url("https://fonts.googleapis.com/css?family=Candal");
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: "Candal", sans-serif;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: deeppink;

  height: 100%;
  width: 100%;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100% - 50px);
  width: 100%;

  background: lightpink;

  text-transform: uppercase;
  font-size: xx-large;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: deepskyblue;
  color: white;

  min-height: 50px;
  max-height: 50px;
  width: 100%;
  font-size: 30px;
}

#nav > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-decoration: none;
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
