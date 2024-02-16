<svelte:head>
	<title>Profile</title>
	<meta name="profile" content="About this app" />
</svelte:head>


<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { supabaseClient } from '$lib/supabase';
	import profilePic from '$lib/images/profile-picture.jpg';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Avatar from './Avatar.svelte'
	const fullName = "Philip Holmqvist"
	const username = "holmen00"
	const signUpDate = "12 Jan 2024"
	const authLevel = "administrator"
	const email = "philip.holmqvist@outlook.com"
	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		console.log("Utloggad!")
		cancel();
		
	};

	//Code for previewing the changed profile picture. Makes the profile picture change instantly instead of having to wait for it to upload.
	const showPreview = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
        const src = URL.createObjectURL(files[0]);
        const preview = document.getElementById('avatar-preview') as HTMLImageElement;
        preview.src = src;
    }
};

</script>

<style>
	#photo-upload1{
		position: absolute;
  		font-size: 50px;
  		opacity: 0;
  		right: 0;
  		top: 0;
	}

	#photo-upload2{
		position: absolute;
  		font-size: 50px;
  		opacity: 0;
  		right: 0;
  		top: 0;
	}

	#photo-upload-div{
		position: relative;
  		overflow: hidden;
	}

</style>
{#if data.session}
<div class="container">
	<div class="row flex-lg-nowrap">
		<div class="col-12 col-lg-auto mb-3" style="width: 200px;">
			<div class="card p-3">
				<div class="e-navlist e-navlist--active-bg">
					<ul class="nav">
						<li class="nav-item">
							<a class="nav-link px-2 active" href="#"><i class="fa fa-fw fa-bar-chart mr-1"></i>
								<span>Overview</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-2" href="https://www.bootdey.com/snippets/view/bs4-crud-users" target="__blank">
								<i class="fa fa-fw fa-th mr-1"></i>
								<span>CRUD</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-2" href="https://www.bootdey.com/snippets/view/bs4-edit-profile-page" target="__blank">
								<i class="fa fa-fw fa-cog mr-1"></i>
								<span>Settings</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="row">
				<div class="col mb-3">
					<div class="card">
						<div class="card-body">
							<div class="e-profile">
								<div class="row">
									<div class="col-12 col-sm-auto mb-3">
										<div class="mx-auto" style="width: 140px;">
											<div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
												<img src={profilePic} class="img-thumbnail" alt="" id="avatar-preview">
											</div>
										</div>
									</div>
									<div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
										<div class="text-center text-sm-left mb-2 mb-sm-0">
											<h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
												{fullName}
											</h4>
											<p class="mb-0">@{username}</p>
											<div class="text-muted">
												<small>Last seen 2 hours ago</small>
											</div>


											<div class="mt-2" id="photo-upload-div">
												<input class="form-control" type="file" id="photo-upload1" name="file" value="" accept="image/*"/>
												<div class="file btn btn-primary">
													<i class="fa fa-fw fa-camera"></i>
													Change Photo
													<input class="form-control" type="file" id="photo-upload2" name="avatar" value="" accept="image/*" on:change={showPreview}/>
												</div>
											</div>




										</div>
										<div class="text-center text-sm-right">
											<span class="badge badge-secondary">{authLevel}</span>
											<div class="text-muted">
												<small>Joined {signUpDate}</small
												>
											</div>
										</div>
									</div>
								</div>
								<ul class="nav nav-tabs">
									<li class="nav-item">
										<a href="" class="active nav-link">Settings</a>
									</li>
								</ul>
								<div class="tab-content pt-3">
									<div class="tab-pane active">
										<form class="form" novalidate>
											<div class="row">
												<div class="col">
													<div class="row">
														<div class="col">
															<div class="form-group">
																<label>Full Name</label>
																<input
																	class="form-control"
																	type="text"
																	name="name"
																	placeholder={fullName}
																	value={fullName}
																/>
															</div>
														</div>
														<div class="col">
															<div class="form-group">
																<label>Username</label>
																<input
																	class="form-control"
																	type="text"
																	name="username"
																	placeholder={username}
																	value={username}
																/>
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col">
															<div class="form-group">
																<label>Email</label>
																<input
																	class="form-control"
																	type="text"
																	placeholder={email}
																/>
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col mb-3">
															<div class="form-group">
																<label>About</label>
																<textarea
																	class="form-control"
																	rows="5"
																	placeholder="My Bio"
																></textarea>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12 col-sm-6 mb-3">
													<div class="mb-2">
														<b>Change Password</b>
													</div>
													<div class="row">
														<div class="col">
															<div class="form-group">
																<label>Current Password</label>
																<input
																	class="form-control"
																	type="password"
																	placeholder="••••••"
																/>
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col">
															<div
																class="form-group"
															>
																<label
																	>New
																	Password</label
																>
																<input
																	class="form-control"
																	type="password"
																	placeholder="••••••"
																/>
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col">
															<div
																class="form-group"
															>
																<label
																	>Confirm <span
																		class="d-none d-xl-inline"
																		>Password</span
																	></label
																>
																<input
																	class="form-control"
																	type="password"
																	placeholder="••••••"
																/>
															</div>
														</div>
													</div>
												</div>
												<div
													class="col-12 col-sm-5 offset-sm-1 mb-3"
												>
													<div class="mb-2">
														<b>Keeping in Touch</b>
													</div>
													<div class="row">
														<div class="col">
															<label
																>Email
																Notifications</label
															>
															<div
																class="custom-controls-stacked px-2"
															>
																<div
																	class="custom-control custom-checkbox"
																>
																	<input
																		type="checkbox"
																		class="custom-control-input"
																		id="notifications-blog"
																		checked
																	/>
																	<label
																		class="custom-control-label"
																		for="notifications-blog"
																		>Blog
																		posts</label
																	>
																</div>
																<div
																	class="custom-control custom-checkbox"
																>
																	<input
																		type="checkbox"
																		class="custom-control-input"
																		id="notifications-news"
																		checked
																	/>
																	<label
																		class="custom-control-label"
																		for="notifications-news"
																		>Newsletter</label
																	>
																</div>
																<div
																	class="custom-control custom-checkbox"
																>
																	<input
																		type="checkbox"
																		class="custom-control-input"
																		id="notifications-offers"
																		checked
																	/>
																	<label
																		class="custom-control-label"
																		for="notifications-offers"
																		>Personal
																		Offers</label
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div
													class="col d-flex justify-content-end"
												>
													<button
														class="btn btn-primary"
														type="submit"
														>Save Changes</button
													>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3 mb-3">
					<div class="card mb-3">
						<div class="card-body">
							<div class="px-xl-3">
								<button class="btn btn-block btn-secondary">
									<i class="fa fa-sign-out"></i>

									



									<!-- <span>Logout</span> -->

									
									<form action="/logout" method="POST" use:enhance={submitLogout}>
										<button type="submit" class="btn btn-primary">Logout</button>
									</form>
								</button>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<h6 class="card-title font-weight-bold">Support</h6>
							<p class="card-text">
								Get fast, free help from our friendly
								assistants.
							</p>
							<button type="button" class="btn btn-primary"
								>Contact Us</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



{:else}
<p>Du är utloggad</p>
{goto("/")}
{/if}


