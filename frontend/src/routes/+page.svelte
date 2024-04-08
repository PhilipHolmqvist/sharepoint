<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import type { PageData } from './$types';
	import { redirect } from '@sveltejs/kit';
	import Header from "./Header.svelte";

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
