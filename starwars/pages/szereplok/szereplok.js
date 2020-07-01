$(document).ready(function(){
    
	$.post("pages/szereplok/lekerdez.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);

		var tomb=JSON.parse(data);
		//alert("A legelső adat: "+tomb[0].film_cim);
		
		var szoveg="";
		
		
		for (var i=0;i<tomb.length;i++)
		{
		if (i%4==0)	
		szoveg+='<div class="row">';
		szoveg+='<div class="col-sm-3"><div class="filmkeret" id="'+tomb[i].szereplo_id+'"  data-toggle="modal" data-target="#myModal">';
		szoveg+='<img class="filmkep"  src="kepek/indexkep'+tomb[i].szereplo_index+'" style="height:130px">';
		szoveg+='<br><div class="filmcimstilus">'+tomb[i].szereplo_nev+'</div>';
		//szoveg+='<td><button type="button" id="'+tomb[i].film_id+'"class="btn btn-info btn-lg sajat" data-toggle="modal" data-target="#myModal">Open Modal</button></td>';
		szoveg+='</div></div>';
		if (i%4==3)
			szoveg+='</div>'; 	
		}
 		
		szoveg+='<div id="modalishelye"></div>';
		
				
		$("#tablazat").html(szoveg);
		$("#modalishelye").load("pages/szereplok/modalis.html");
		
		$(".filmkeret").click(function(){
			//alert(this.id);
			var adatok=
			{
				bevitel1:this.id
			}
			$.post("pages/szereplok/lekerdez_decsakegy.php", adatok,function(eredmeny){
				//alert(eredmeny);
				var tomb=JSON.parse(eredmeny);
				var modalisszoveg="";
				var modaliscim='<center><id="szereplonev">'+tomb[0].szereplo_nev+'</center>';
				modalisszoveg+='<br><center><img src="kepek/indexkep'+tomb[0].szereplo_kep+'" style="width:80%"></center><br>';
				modalisszoveg+='<bottom>'+tomb[0].szereplo_leiras+'</bottom><br>';
				modalisszoveg+='<br>';
				modalisszoveg+='<br>';
				modalisszoveg+='<br>';
				modalisszoveg+='<br>';
				modalisszoveg+='<ol>';
				modalisszoveg+='</ol>';

			}
				else{
				modalisszoveg+='Festmény állapota: Eladva';
				}
				$("#modaliscim").html(modaliscim);
				$("#modalistartalma").html(modalisszoveg);
				
				
				
				$("#megrendeles").click(function(){
					var adatok=
			{
				bevitel1:$("#megrendeles").val(),
				bevitel2:$("#festmenynev").val(),
				bevitel3:$(tomb[0].festmeny_datum).val()
			}
				//alert($("#megrendeles").val());	
        $.post("pages/szereplo/rendeles.php", adatok,function(eredmeny){
				//alert(eredmeny);
				if(eredmeny==2)
				$("ol").append("<li>Jelzés! Jelentkezz be a megrendeléshez!</li>");
			else
				$("ol").append("<li>Jelzés! Megrendelted! A megrendeléseidnél megtudod tekinteni!</li>");

				//2-es ha nem vagy belépve
				
		});
		
		
    });
				
				
				
			});
				
				
    });
		
		
		
    });
	
	
});