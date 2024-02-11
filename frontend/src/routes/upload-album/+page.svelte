<svelte:head>
	<title>Upload</title>
	<meta name="upload" content="About this app" />
	<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
</svelte:head>


<script lang="ts">
	import albumPic from '$lib/images/profile-picture.jpg';
</script>

<style>
	.bd-placeholder-img {
	  font-size: 1.125rem;
	  text-anchor: middle;
	  -webkit-user-select: none;
	  -moz-user-select: none;
	  user-select: none;
	}

	@media (min-width: 768px) {
	  .bd-placeholder-img-lg {
		font-size: 3.5rem;
	  }
	}
  </style>


<p>Upload images here</p>
<input class="form-control" type="file" id="formFileMultiple" multiple />

<div class="container">
	<main>
		  <h4 class="mb-3">Upload album</h4>
		  <form class="needs-validation" novalidate>
			<div class="row g-3">
			  <div class="col-sm-6">
				<label for="firstName" class="form-label">Album name</label>
				<input type="text" class="form-control" id="firstName" placeholder="" value="" required>
				<div class="invalid-feedback">
				  Valid first name is required.
				</div>
			  </div>
			
			  <div class="col-12">
				<div class="form-group">
					<label for="exampleFormControlTextarea1">Album description</label>
					<textarea class="form-control" id="album-description" placeholder="This was a fun vacation in 2019..." rows="3"></textarea>
				  </div>
			  </div>

			  <div class="col-6">
				<div class="mx-auto" style="width: 140px;">
				  <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
					  <img src={albumPic} class="img-thumbnail" alt="">
				  </div>
				</div>
			  </div>
  
			  <div class="col-12">
				<label for="username" class="form-label">Username</label>
				<div class="input-group has-validation">
				  <span class="input-group-text">@</span>
				  <input type="text" class="form-control" id="username" placeholder="Username" required>
				<div class="invalid-feedback">
					Your username is required.
				  </div>
				</div>
			  </div>

			<hr class="my-4">  
  
			  <div class="col-12">
				<label for="country" class="form-label">Country</label>
				<select class="form-select" id="country" required>
				  <option value="">Choose...</option>
				  <option>United States</option>
				</select>
				<div class="invalid-feedback">
				  Please select a valid country.
				</div>
			  </div>

			<hr class="my-4">
  
			<div class="form-check">
			  <input type="checkbox" class="form-check-input" id="save-info">
			  <label class="form-check-label" for="save-info">Make album private</label>
			</div>
  
			<hr class="my-4">
  
			
  
			<hr class="my-4">
  
			<button class="w-100 btn btn-primary btn-lg" type="submit">Create album</button>
		  </form>
	</main>
</div>

