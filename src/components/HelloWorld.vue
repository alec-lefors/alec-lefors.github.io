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
  data() {
    return {
      tracks: [
        "Back to Myself Hero The Band",
        "Bass Jam",
        "Breathe Deeper",
        "Motions - Far Out Version",
        "Slide Away",
        "Close Your Eyes (And Count To Fuck)",
        "Leyla Altin Gun",
        "Talking Elderbrook",
        "Good Day Surfaces",
        "Norman fucking Rockwell",
        "Superposition Young the Giant",
        "Scrawny Wallows",
        "Seashore The Regrettes",
        "Dontmakemefallinlove",
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
