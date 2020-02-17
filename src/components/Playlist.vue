<template>
  <div>
    <playlist-track v-for="(searchTerm, index) in tracks" :key="index" :index="index + 1" :search="searchTerm"></playlist-track>
  </div>
</template>

<script>

import PlaylistTrack from './Track';
export default {
  name: 'Playlist',
  props: {
    tracks: Array
  },
  components: {
    PlaylistTrack
  },
  data() {
    return {
      
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
  h1 {
    font-weight: 900;
  }
</style>
