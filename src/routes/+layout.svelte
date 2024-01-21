<script>
	import Header from './Header.svelte';
	import { Button } from 'svelte-ux';
	import './styles.css'
	export let data

</script>

<div class="app">
	<Header />

	<main>
		
		<slot />
		<h2>{data.test}</h2>
		<Button variants='fill' color='accent'>Click me</Button>
	</main>

	
</div>

