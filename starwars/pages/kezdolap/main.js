$.post("pages/kezdolap/lekerdez.php", function(data, status){

		var modalisszoveg="";
				modalisszoveg+='<div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:300px;height;200px">';
				modalisszoveg+='<ol class="carousel-indicators">';
				
				for (var i=0;i<tomb.length;i++)
				{
					if (i==0)
					modalisszoveg+='<li data-target="#myCarousel" data-slide-to="'+tomb[i].festmeny_id+'"  class="active"></li>';
					else				
					modalisszoveg+='<li data-target="#myCarousel" data-slide-to="'+tomb[i].festmeny_id+'" ></li>';
				}
				modalisszoveg+='</ol>';
				modalisszoveg+='<div class="carousel-inner">';
				
				for (var i=0;i<tomb.length;i++)
				{
					if (i==0)
					{
				modalisszoveg+='<div class="item active">';
				modalisszoveg+=' <img src="kepek/'+tomb[i].festmeny_kep+'"  style="width:300px;height;200px">';
				modalisszoveg+=' </div>';
					}
					else
					{
				modalisszoveg+='<div class="item">';
				modalisszoveg+=' <img src="kepek/'+tomb[i].festmeny_kep+'"  style="width:300px;height;200px">';
				modalisszoveg+=' </div>';
					}
				}
				
				modalisszoveg+='</div>';
				modalisszoveg+='<a class="left carousel-control" href="#myCarousel" data-slide="prev">';
				modalisszoveg+='<span class="glyphicon glyphicon-chevron-left"></span>';
				modalisszoveg+='<span class="sr-only">Previous</span>';
				modalisszoveg+='</a>';
			    modalisszoveg+=' <a class="right carousel-control" href="#myCarousel" data-slide="next">';
				modalisszoveg+=' <span class="glyphicon glyphicon-chevron-right"></span>';
				modalisszoveg+='<span class="sr-only">Next</span>';
			    modalisszoveg+=' </a>';
			    modalisszoveg+='</div>';
}