$(document).ready(function(){
	    $("#felulkeres_gomb").click(function(){
        //alert("meg lett nyomva");
		var adatok=
		{
			bevitel1:$("#bevitel_keres_felul").val()
		}
		
		$.post("pages/kereses/lekerdez.php", adatok,function(eredmeny, status){
        //alert("Data: " + eredmeny + "\nStatus: " + status);
		var tomb=JSON.parse(eredmeny);
		
		var szoveg="";
		for (var i=0;i<tomb.length;i++)
		{
			szoveg+='<div class="kereseskeret" id="'+tomb[i].film_id+'" data-toggle="modal" data-target="#myModal">';
			szoveg+=' <div class="row">';
			szoveg+='<div class="col-sm-4">';
			szoveg+='<img src="kepek/'+tomb[i].film_kep+'" style="height:150px" >';
			szoveg+='</div>';
			szoveg+='<div class="col-sm-8" style="padding:10px;">';
			szoveg+=tomb[i].film_cim+"<br>";
			szoveg+=tomb[i].film_ev+"";
			szoveg+='</div>';
			szoveg+='</div>'; 
			szoveg+='</div>';
		}
		
		szoveg+='<div id="modalishelye"></div>';
		$("#alsoresz").html(szoveg);
		$("#modalishelye").load("pages/kereses/modalis.html");
		$(".kereseskeret").click(function(){
			//alert(this.id);
			var adatok=
			{
				bevitel1:this.id
			}
			$.post("pages/kereses/lekerdez_decsakegy.php", adatok,function(eredmeny){
				//alert(eredmeny);
				var tomb=JSON.parse(eredmeny);
				var modalisszoveg="";
				var modaliscim='<center>'+tomb[0].film_cim+'</center>';
				modalisszoveg+='Kiadási év:'+tomb[0].film_ev;
				modalisszoveg+='<br><center><img src="kepek/'+tomb[0].film_kep+'" style="width:80%"></center>';
				
				$("#modaliscim").html(modaliscim);
				$("#modalistartalma").html(modalisszoveg);
				
				
			});
				
				
    });
		
    });
		
    });
	 
	 
	 
	
	
	
	
$("#logingomb").keypress(function (e) {
  if (e.which == 13) {
          $("#logingomb").click();
  }
        });	
$("[name='pass']").keypress(function (e) {
  if (e.which == 13) {
          $("#logingomb").click();
		  
  }
        });	

$("#registergomb").keypress(function (e) {
  if (e.which == 13) {
          $("#registergomb").click();
  }
        });

$("#reg_jelszo_megegyszer").keypress(function (e) {
  if (e.which == 13) {
          $("#registergomb").click();
  }
        });	
		
	 $("#registergomb").click(function(){
		 //alert("ok");
		 
		 var patt = /\d/;
		 //alert(patt.test($("#reg_felh").val())); 


		 var hibaszoveg="";
		 if ($("#reg_felh").val()=="")
			 hibaszoveg="A felhasználónév mező üres.";
		 else if ($("#reg_felh").val().length<5)
			 hibaszoveg="A felhasználónév minimum 5 karakter.";
		 else if ($("#reg_jelszo").val()=="")
			 hibaszoveg="A jelszó mező üres.";
		 else if ($("#reg_jelszo").val().length<5)
			 hibaszoveg="A jelszó minimum 5 karakter.";
		 else if (!patt.test($("#reg_jelszo").val()))
			 hibaszoveg="A jelszóban kötelező számot megadni.";
		 else if ($("#reg_jelszo").val()!=$("#reg_jelszo_megegyszer").val())
			 hibaszoveg="A két jelszónak meg kell egyeznie.";
		 
		 
		 
		 
		 $("#hibaszoveg").html(hibaszoveg);
		 if (hibaszoveg=="")
		 {
		 var adatok=
		 {
			 reg_felh:$("#reg_felh").val(),
			 reg_jelszo:$("#reg_jelszo").val()
		 }
		 $.post("alap/felhasznalo_felvitel.php",adatok,function(eredmeny){
			//alert(eredmeny); 
			if (eredmeny==1)
			{
				alert("A regisztráció sikerült, kérem jelentkezzen be.");
				$("#register-modal").modal("hide");
				$("#login-modal").modal();
			}
			else if (eredmeny==2)
			{
				alert("A felhasználónév már létezik.");
			}
			else alert("A felvitelben hiba történt.");
			
		 });
		 }
		 
	 });
	
	 $("#reg").click(function(){
		 
		 $("#login-modal").modal("hide");
		 $("#register-modal").modal();
		 return false;
	 });
	
	
	  $("#logoutgomb").click(function(){
        //alert("megnyomva");
		$.post("alap/kilepes.php",function(eredmeny){
			if (eredmeny==1)
				location.reload();
		});
		
	  });
		
    $("#logingomb").click(function(){
        //alert("megnyomva");
		var adatok=
		{
			felhasznalonev:$("[name='user']").val(),
			jelszo:$("[name='pass']").val()
		}
		//alert(adatok.felhasznalonev+" "+adatok.jelszo);
		$.post("alap/belepes.php",adatok,function(eredmeny){
			//alert(eredmeny);
			if (eredmeny==0)
				alert("Hiba");
			else
			{
				$("#login-modal").hide();
				location.reload(true);
			}
			
		});
		
    });
});