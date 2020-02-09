<template>
  <div id="app">
    <div class="app-grid">
      <nav>
        <div class="nav-group">
          <h2>Wheezy</h2>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div class="nav-group">
          <h2>Playlists</h2>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </nav>
      <div class="container">
        <router-view/>
      </div>
    </div>
    <stream></stream>
  </div>
</template>

<script>
import Stream from './components/Stream';

export default {
  components: {
    Stream,
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  #app {
    height: 100vh;
    background-color: #181B35;
  }
  .app-grid {
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,217,217,1) 100%);
    display: grid;
    grid-template-columns: 300px auto;
    padding: 4em 4em 0 4em;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    height: calc(100vh - 60px);
  }
  nav {
    grid-column: 1 / 1;
  }
  .container {
    grid-column: 2 / 2;

    overflow-y: scroll;
    width: calc(100% + 50px);
    margin-left: -50px;
    padding: 0 0 0 50px;
  }
  .controls {
  }
</style>

<style lang="scss" scoped>
nav {
  position: fixed;
  text-transform: uppercase;

  h2 {
    margin-bottom: .6em;
    font-weight: 900;
  }

  a {
    font-weight: bold;
    color: #737373;
    display: block;
    text-decoration: none;
    margin-bottom: .4em;
    font-weight: 900;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
