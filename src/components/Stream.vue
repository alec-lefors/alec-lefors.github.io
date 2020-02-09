<template>
  <div class="controls">
    <div>
      <h2>Wiley Radio</h2>
      <h3>Listen now</h3>
    </div>
    <div :class="playing ? 'pause stream-button' : 'play stream-button'" @click="toggleStream"></div>
    <audio id="player">
      <source src="http://wileyradio.org:8000/liq.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Stream',
  props: {

  },
  data() {
    return {
      playing: false,
      user: ''
    }
  },
  mounted() {
    axios.get(`https://wileyradio.org/user.php`).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    toggleStream() {
      if (this.playing) {
        this.playing = false;
        document.getElementById('player').pause()
      } else {
        this.playing = true;
        document.getElementById('player').play()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .controls {
    background-color: #181B35;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 60px;
    color: white;
    bottom: 0;
    width: 100%;
    z-index: 2;

    h2 {
      font-size: 18px;
      margin: 0 0 5px 0;
    }
    h3 {
      font-size: 14px;
      margin: 0 0 0 0;
    }
  }

  .stream-button {
    width: 40px;
    height: 40px;
    background: #F88821;
    border: none;
    border-radius: 100%;
    cursor: pointer;

    &:focus {
      outline: 0;
      border: 1px solid hsl(210, 58%, 69%);
      box-shadow: 0 0 0 3px hsla(210, 76%, 57%, 0.5);
    }
  }

  .play {
    &:after {
      content: '';
      display: inline-block;
      position: relative;
      top: 11px;
      left: 13px;
      border-style: solid;
      border-width: 8px 0 8px 16px;
      border-color: transparent transparent transparent white;
    }
  }
  .pause {

    &:after {
      content: '';
      display: inline-block;
      position: relative;
      top: 10px;
      left: 19px;
      width: 4px;
      height: 20px;
      background-color: white;
    }

    &:before {
      content: '';
      display: inline-block;
      position: relative;
      top: 10px;
      left: 13px;
      width: 4px;
      height: 20px;
      background-color: white;
    }
  }
</style>
