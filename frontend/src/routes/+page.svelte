<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Header from "./Header.svelte";

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		
		{goto("/dashboard")}
		<p>Welcome, {data.session.user.email}</p>
	{:else}
		{goto("/login")} 
		<!-- Här ska logga in funktionne ligga -->
	{/if}
</main>