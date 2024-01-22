<script>
	import Header from './Header.svelte';
	import './styles.css';
	</script>

<div class="app">
	<main>
		<Header />
		<slot />
	</main>
</div>
