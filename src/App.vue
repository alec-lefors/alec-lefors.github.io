<template>
  <div id="app">
    <div class="app-grid">
      <nav>
        <div class="logo" style=""></div>
        <div class="nav-group">
          <h2>Wheezy</h2>
          <router-link to="/">Home</router-link>
          <!-- <router-link to="/about">About</router-link> -->
        </div>
        <div class="nav-group">
          <h2>Playlists</h2>
          <!-- <router-link to="/">This Week</router-link> -->
          <router-link to="/week/0">Last Week</router-link>
        </div>
      </nav>
      <div class="container">
        <keep-alive>
          <router-view/>
        </keep-alive>
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
  @mixin breakpoint($point) {
    @if $point == large {
       @media (min-width: 70em) { @content ; }
    }
    @else if $point == medium {
       @media (max-width: 64em) { @content ; }
    }
    @else if $point == tablet {
       @media (min-width: 50em) { @content ; }
    }
    @else if $point == phablet {
       @media (min-width: 37.5em)  { @content ; }
    }
    @else if $point == small {
       @media (max-width: 37.5em)  { @content ; }
    }
  }
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    margin: 0;

    &:before {
      content: '';
      width: 100vw;
      height: 100vh;
      z-index: 0;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,217,217,1) 100%);
      position: fixed;
    }
  }
  .app-grid {
    display: grid;
    grid-template-columns: 300px auto;
    @include breakpoint(medium) {
      display: block;
      grid-template-columns: auto;
    }
    padding: 4em 4em 0 4em;
    * {
      z-index: 1;
    }
  }
  nav {
    @include breakpoint(medium) {
      position: sticky;
    }
    position: fixed;
    grid-column: 1 / 1;
  }
  .container {
    @include breakpoint(medium) {
      position: sticky;
    }
    @include breakpoint(small) {
      padding-bottom: 80px;
    }
    grid-column: 2 / 2;
    min-height: calc(100vh - 144px);
    width: calc(100% + 80px);
    margin-left: -80px;
    padding: 0 0 0 80px;
    margin-bottom: 80px;
  }
  .button {
    display: inline-block;
    transition: background-color .23s ease-out;
    text-decoration: none;
    color: white;
    padding: .5em 2em;
    border-radius: 5px;
    &:hover {
      background-color: #424242;
    }
  }
</style>

<style lang="scss" scoped>
nav {
  text-transform: uppercase;

  .logo {
    height: 200px;
    width: 200px;
    background-image: url('~@/assets/logo.jpg');
    background-size: cover;
  }

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
