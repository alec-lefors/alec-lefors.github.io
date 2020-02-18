<template>
	<div class="home">
		<h1 v-text="playlist.name"></h1>
		<playlist :tracks="playlist.tracks"></playlist>
	</div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist';

export default {
	name: 'week',
	components: {
		Playlist
	},
	data() {
		return {
			playlist: {}
		}
	},
	mounted() {
		const id = this.$route.params.id;
		this.playlist = this.$store.state.playlists.find(x => x.hour == id);
	}
}
</script>
