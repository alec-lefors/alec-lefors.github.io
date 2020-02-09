<template>
  <div class="track" :data-key="index">
    <div class="image" :style="{backgroundImage: `url('${this.track.album.images[1].url}')`}"></div>
    <div class="track-info">
      <h2 v-text="track.name"></h2>
      <h3><span v-for="(artist, index) in track.artists" :key="index" v-text="artist.name"></span> ● <span v-text="track.album.name"></span></h3>
      <h3 v-text="songLength"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist-Track',
  props: {
    track: Object,
    index: Number
  },
  computed: {
    songLength() {
      var minutes = Math.floor(this.track.duration_ms / 60000);
      var seconds = ((this.track.duration_ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .track {
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 2em;
    margin-bottom: 1em;
    position: relative;
    &:before {
      content: attr(data-key);
      position: absolute;
      left: -50px;
      top: 70px;
      font-weight: 500;
      font-size: 3rem;
      color: #AFAFAF;
    }
  }
  .image {
    width: 200px;
    height: 200px;
    background-size: cover;

    grid-column: 1 / 1;
  }
  .track-info {
    grid-column: 2 / 2;
    align-self: center;
  }
</style>
