<template>
  <div>
    <h1>This Week's Playlist</h1>
    <playlist-track v-for="(track, index) in tracks" :key="index" :index="index + 1" :track="track.track"></playlist-track>
  </div>
</template>

<script>
import axios from 'axios';
import PlaylistTrack from './Track';
export default {
  name: 'Playlist',
  props: {
    playlistId: String
  },
  components: {
    PlaylistTrack
  },
  data() {
    return {
      tracks: []
    }
  },
  mounted() {
    axios.get(`https://api.spotify.com/v1/playlists/${this.playlistId}/tracks`, {
      headers: {
        Authorization: 'Bearer BQCAtmXXBlS4cojDvcAW4D2GQzdbp-bTYTqTj1T4B8iU4qe_djGjpW6bGl1k-M23y5y0L-IF9rdZOXn6kBw',
      }
    }).then(response => {
      this.tracks = response.data.items;
    });
  }
}
</script>

<style scoped lang="scss">
  h1 {
    font-weight: 900;
  }
</style>
