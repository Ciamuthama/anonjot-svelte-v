<script>
	import Header from './Header.svelte';
	import { Button } from 'svelte-ux';
	import './styles.css'
	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
		<Button variants='fill' color='accent'>Click me</Button>
	</main>

	
</div>

