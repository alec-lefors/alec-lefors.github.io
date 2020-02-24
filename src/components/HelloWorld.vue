<template>
  <div>
    <h1>This Week's Playlist</h1>
    <playlist :tracks="tracks"></playlist>
  </div>
</template>

<script>
import Playlist from './Playlist';

export default {
  name: 'HelloWorld',
  components: {
    Playlist,
  },
  props: {
    msg: String
  },
  created() {
    this.tracks = this.$store.state.playlists[0].tracks;
  },
  data() {
    return {
      tracks: [

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
