<template>
  <div class="track" :data-key="index" v-if="track">
    <div class="image" :style="{backgroundImage: `url('${image}')`}"></div>
    <div class="track-info">
      <h2 v-text="track.trackName"></h2>
      <h4>by {{ track.artistName }}</h4>
      <h3><span v-text="track.artistName"></span> • <span v-text="track.collectionCensoredName"></span></h3>
      <h3 v-text="songLength"></h3>
      <a class="button itunes" :href="track.trackViewUrl">Open in Apple Music</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Playlist-Track',
  props: {
    index: Number,
    search: String
  },
  computed: {
    songLength() {
      var minutes = Math.floor(this.track.trackTimeMillis / 60000);
      var seconds = ((this.track.trackTimeMillis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },
    image() {
      if (this.track.artworkUrl100) {
        return this.track.artworkUrl100.replace('100x100', '500x500');
      }
      return '';
    }
  },
  data() {
    return {
      track: {}
    }
  },
  mounted() {
    axios.get(`https://itunes.apple.com/search?term=${this.search}&country=US&media=music&entity=song&limit=1`, {
    }).then(response => {
      this.track = response.data.results[0];
    });
  }
}
</script>

<style scoped lang="scss">
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

  h4 {
    display: none;
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  @include breakpoint(small) {
    h2 {
      font-size: 1.3rem;
    }
    h3 {
      display: none;
    }
    .button {
      display: none;
    }
    h4 {
      display: block;
      color: #AFAFAF;
    }
  }
  .track {
    @include breakpoint(small) {
      grid-template-columns: 100px auto;
      grid-column-gap: .5em;
    }
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 2em;
    margin-bottom: 1em;
    position: relative;
    &:before {
      @include breakpoint(medium) {
        font-size: 2rem;
        width: 50px;
        left: -50px;
      }
      @include breakpoint(small) {
        top: 34px;
      }
      content: attr(data-key);
      position: absolute;
      left: -80px;
      top: 70px;
      font-weight: 500;
      font-size: 3rem;
      color: #AFAFAF;
      width: 80px;
      text-align: center;
    }
  }
  .image {
    @include breakpoint(small) {
      width: 100px;
      height: 100px;
    }
    width: 200px;
    height: 200px;
    background-size: cover;

    grid-column: 1 / 1;
  }
  .track-info {
    grid-column: 2 / 2;
    align-self: center;
  }
  .itunes {
    background-color: #c4007c;
    &:hover {
      background-color: #6e415d;
    }
  }
</style>
