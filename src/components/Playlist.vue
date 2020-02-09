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
    playlistId: String
  },
  components: {
    PlaylistTrack
  },
  data() {
    return {
      tracks: [
        'Doves In The Wind',
        'Sex Super Smash Bros.',
        'Not in Love We\'re Just High',
        'How to Be a Heartbreaker',
        'Less I know The Better',
        'She (Featuring Frank Ocean)',
        'Cola',
        'Dead To Me Kali Uchis',
        'Friend Zone Thundercat',
        'Gettin\' Jiggy Wit It',
        'Blue Marina',
        'Heartbeat',
        'Pink Lemonade Wombats',
        'Gold Digger',
        'Body Of My Own',
        'OKOKOK',
        'False Alarm',
        'Don\'t You Forget About Me',
      ]
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
