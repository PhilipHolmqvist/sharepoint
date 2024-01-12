<svelte:head>
	<title>Viewer</title>
	<meta name="viewer" content="About this app" />
</svelte:head>

<style>

.margin30 {
    margin-bottom: 30px;
}

.item-img-wrap {
    position: relative;
    text-align: center;
    overflow: hidden;
}

.item-img-wrap img {
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    width: 100%;
}


/*************pagination***********/
.gallery-bottom .pagination {
  margin-top: 0px;
}

.pagination > li > a, .pagination > li > span {
  background-color: #ccc;
  padding: 3px 9px;
  color: #fff;
  border: 0px;
}

.pagination > li > a {
  margin-right: 5px;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
  background-color: #32c5d2;
}
</style>
<div class="album py-5 bg-light">
<div class="container">
	<div class="row">
	<div class="col-md-12">
	<div id="grid" class="row">
	<div class="mix col-sm-3 page1 page4 margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/FFB6C1/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3 page2 page3 margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/20B2AA/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3  page3 page2 margin30 ">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/87CEFA/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3  page4 margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/EE82EE/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3 page1 margin30 ">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/#FF6347/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3  page2 margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/008080/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3  page3 margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/DDA0DD/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	<div class="mix col-sm-3 page4  margin30">
	<div class="item-img-wrap ">
	<img src="https://www.bootdey.com/image/312x315/FFA500/000000" class="img-responsive" alt="workimg">
	<div class="item-img-overlay">
	<a href="#" class="show-image">
	<span></span>
	</a>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div class="row gallery-bottom">
	<div class="col-sm-6">
	<ul class="pagination">
	<li>
	<a href="#" aria-label="Previous">
	<span aria-hidden="true">«</span>
	</a>
	</li>
	<li class="active"><a href="#">1</a></li>
	<li><a href="#">2</a></li>
	<li><a href="#">3</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
	<li>
	<a href="#" aria-label="Next">
	<span aria-hidden="true">»</span>
	</a>
	</li>
	</ul>
	</div>
	<div class="col-sm-6 text-right">
	<em>Displaying 8 images (of 100 posts)</em>
	</div>
	</div>
	</div>
</div>
