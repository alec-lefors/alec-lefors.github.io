<template>
  <div class="home">
    <playlist :tracks="tracks"></playlist>
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
			tracks: []
		}
	},
	mounted() {
		const playlists = [
			[
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
		];
		const id = this.$route.params.id;
		this.tracks = playlists[id];
	}
}
</script>
