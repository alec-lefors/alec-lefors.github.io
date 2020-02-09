<template>
  <div>
    <h1>{{ msg }}</h1>
    <playlist :playlist-id="'2VaJabIVQ9EBRmDyXmUHKB'"></playlist>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
