
<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js'
	import { createEventDispatcher } from 'svelte'

	export let size = 10
	export let url: string
	export let supabase: SupabaseClient

	let avatarUrl: string | null = null
	let uploading = false
	let files: FileList

	const dispatch = createEventDispatcher()

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path)

			if (error) {
				throw error
			}

			const url = URL.createObjectURL(data)
			avatarUrl = url
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message)
			}
		}
	}

	const uploadAvatar = async () => {
		try {
			uploading = true

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.')
			}

			const file = files[0]
			const fileExt = file.name.split('.').pop()
			const filePath = `${Math.random()}.${fileExt}`

			console.log("hej")

			const { error } = await supabase.storage.from('avatars').upload(filePath, file)

			if (error) {
				throw error
			}

			url = filePath
			setTimeout(() => {
				console.log("Uploading!.....")
				dispatch('upload')
			}, 10000)
		} catch (error) {
			if (error instanceof Error) {
				console.log("Error: ", error)
				alert(error.message)
			}
		} finally {
			uploading = false
		}
	}

	$: if (url) downloadImage(url)
</script>

<div>

	{#if avatarUrl}
		<img
			src={avatarUrl}
			alt={avatarUrl ? 'Avatar' : 'No image'}
			class="img-thumbnail"
			id="avatar-preview"
			style="height: {size}em; width: {size}em;"
		/>
	{:else}
		<div class="avatar no-image" style="height: {size}em; width: {size}em;" />
	{/if}
	<!--
	<input type="hidden" name="avatarUrl" value={url} />

	<div style="width: {size}em;">
		<label class="button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
	-->
</div>