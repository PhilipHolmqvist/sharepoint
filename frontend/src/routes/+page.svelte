<script lang="ts">
	import type { PageData } from './$types';
	import { redirect } from '@sveltejs/kit';
	export let data: PageData;

</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	
	{#if data.session}
		
		{redirect(307, '/dashboard')}
		<p>Welcome, {data.session?.user.email}</p>
	{:else}
		{redirect(307, '/login')}
		
	{/if}
</main>
