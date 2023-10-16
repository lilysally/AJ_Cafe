var msg0= '<div class="card-body">'+
'<h1 class="card-title text-center">雜誌</h1>'+
'<p class="card-text ">'+
'<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">'+
'<div class="carousel-inner">'+
'<div class="carousel-item active mt-0">'+
'<img src="images/travel.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/coffee.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/health.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'</div>'+
'<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">'+
'<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Previous</span>'+
'</a>'+
'<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">'+
'<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Next</span>'+
'</a>'+
'</div>'+
'</div>';


var msg1= '<div class="card-body ">'+
'<h1 class="card-title text-center">海賊王拼圖</h1>'+
'<p class="card-text ">'+
'<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel ">'+
'<ol class="carousel-indicators">'+
'<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+
'<li data-target="#carouselExampleIndicators" data-slide-to="1">'+'</li>'+
'<li data-target="#carouselExampleIndicators" data-slide-to="2">'+'</li>'+
'</ol>'+
'<div class="carousel-inner ">'+
'<div class="carousel-item active mt-0">'+
'<img src="images/海賊王公仔.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/海賊王_公仔1.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/海賊王_公仔2.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'</div>'+
'<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'+
'<span class="carousel-control-prev-icon" aria-hidden="true">'+'</span>'+
'<span class="sr-only">Previous</span>'+
'</a>'+
'<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'+
'<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Next</span>'+
'</a>'+
'</div>';

var msg2='<div class="card-body">'+
'<h1 class="card-title text-center">益智遊戲</h1>'+
'<p class="card-text ">'+
'<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">'+
'<div class="carousel-inner">'+
'<div class="carousel-item active mt-0">'+
'<img src="images/game-1.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/game-2.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'</div>'+
'<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">'+
'<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Previous</span>'+
'</a>'+
'<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">'+
'<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Next</span>'+
'</a>'+
'</div>'+
'</div>';
var msg3=
'<div class="card-body">'+
'<h1 class="card-title text-center">咖啡器材</h1>'+
'<p class="card-text text-center">'+
'<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">'+
'<div class="carousel-inner">'+
'<div class="carousel-item active mt-0" data-interval="10000">'+
'<img src="images/machine.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0" data-interval="2000">'+
'<img src="images/machine-1.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'<div class="carousel-item mt-0">'+
'<img src="images/machine-2.jpg" class="d-block w-100" alt="...">'+
'</div>'+
'</div>'+
'<a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">'+
'<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Previous</span>'+
'</a>'+
'<a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">'+
'<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
'<span class="sr-only">Next</span>'+
'</a>'+
'</div>'+

'</p>'+
'</div>';

function more(){
    document.getElementById("feature0").innerHTML=msg0;
    document.getElementById("feature1").innerHTML=msg1;
    document.getElementById("feature2").innerHTML=msg2;
    document.getElementById("feature3").innerHTML=msg3;
  }