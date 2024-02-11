<svelte:head>
	<title>Upload</title>
	<meta name="upload" content="About this app" />
	<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
</svelte:head>

<script lang="ts">
	import albumPic from '$lib/images/defualt-album.jpg';
</script>

<div class="container">
	<main>
	  <div class="row g-5">
		<div class="col-md-5 col-lg-4 order-md-last">
		  <h4 class="d-flex justify-content-between align-items-center mb-3">
			<span class="text-primary">Your album picture</span>
		  </h4>
		  
		  <div class="mx-auto" style="width: 140px;">
			<div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
				<img src={albumPic} class="img-thumbnail" alt="">
			</div>
		  </div>

  
		  <form class="card p-2">
			  <button type="submit" class="btn btn-secondary">Upload album cover</button>
			  <div class="mb-3">
				<label for="formFile" class="form-label">Default file input example</label>
				<input class="form-control" type="file" id="formFile">
			  </div>
		  </form>
		</div>

		<div class="col-md-7 col-lg-8">
		  <h4 class="mb-3">Create new album</h4>
		  <form class="needs-validation" novalidate>
			<div class="row g-3">
			  <div class="col-sm-6">
				<label for="albumName" class="form-label">Album name</label>
				<input type="text" class="form-control" id="albumName" placeholder="" value="" required>
				<div class="invalid-feedback">
				  Valid album name is required.
				</div>
			  </div>

			  <div class="col-sm-6">
			  <div class="form-group">
				<label for="albumDescription">Description</label>
				<textarea class="form-control" id="albumDescription" rows="3"></textarea>
			  </div>
			</div>
			  <div class="col-md-5">
				<label for="country" class="form-label">Country</label>
				<select class="form-select" id="country" required>
				  <option value="">Choose...</option> <!-- Add more options-->
				  <option>United States</option>
				  <option>Sweden</option>
				</select>
				<div class="invalid-feedback">
				  Please select a valid country.
				</div>
			  </div>
			  <div class="col-md-5">
			  <p>Upload images here</p>
				<input class="form-control" type="file" id="formFileMultiple" multiple />
			</div>
			</div>

			<hr class="my-4">
  
			<div class="form-check">
			  <input type="checkbox" class="form-check-input" id="private-album">
			  <label class="form-check-label" for="private-album">Make my album private</label>
			</div>
  
			<div class="form-check">
			  <input type="checkbox" class="form-check-input" id="save-info">
			  <label class="form-check-label" for="save-info">This button doesnt do anything</label>
			</div>
  
			<hr class="my-4">
  
			<h4 class="mb-3">Add colaborators</h4>
  
			<div class="row gy-3">
			  <div class="col-md-6">
			  <div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Colaborator's email" aria-label="Recipient's username" aria-describedby="basic-addon2">
				<div class="input-group-append">
				  <button class="btn btn-outline-secondary" type="button" disabled>Add</button>
				</div>
			  </div>
			</div>
			<hr class="my-4">
			<button class="w-100 btn btn-primary btn-lg" type="submit">Create album</button>
		  </form>
		</div>
	  </div>
	</main>

	
</div>

