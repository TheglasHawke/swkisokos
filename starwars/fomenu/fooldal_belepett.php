<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="./main"><span class="menuszoveg">Kezdőlap</span> </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
	  <?php
	  	  if ($_SESSION["login_rang"]==0)
		  
		  {

		print' <li><a href="./szereplok"><span class="menuszoveg" id="menuhatter">Szereplők</span> </a></li>';
 		print' <li><a href="./bolygok"><span class="menuszoveg" id="menuhatter">Bolygók</span> </a></li>';
		print' <li><a href="./jarmuvek"><span class="menuszoveg" id="menuhatter">Járművek</span> </a></li>';
		print' <li><a href="./targyak"><span class="menuszoveg" id="menuhatter">Tárgyak</span> </a></li>';
		print' <li><a href="./elolenyek"><span class="menuszoveg" id="menuhatter">Lények</span> </a></li>';
		print' <li><a href="./novenyek"><span class="menuszoveg" id="menuhatter">Növények</span> </a></li>';
		print' <li><a href="./forum"><span class="menuszoveg" id="menuhatter">Fórum</span> </a></li>';
		
				  }
		
		  ?>
		  
		  <?php
		
	  if ($_SESSION["login_rang"]==1)
		  
		  {
						print' <li><a href="./szereplok"><span class="menuszoveg" id="menuhatter">Szereplők</span> </a></li>';
 		print' <li><a href="./bolygok"><span class="menuszoveg" id="menuhatter">Bolygók</span> </a></li>';
		print' <li><a href="./jarmuvek"><span class="menuszoveg" id="menuhatter">Járművek</span> </a></li>';
		print' <li><a href="./targyak"><span class="menuszoveg" id="menuhatter">Tárgyak</span> </a></li>';
		print' <li><a href="./elolenyek"><span class="menuszoveg" id="menuhatter">Lények</span> </a></li>';
		print' <li><a href="./novenyek"><span class="menuszoveg" id="menuhatter">Növények</span> </a></li>';
		print' <li><a href="./forum"><span class="menuszoveg" id="menuhatter">Fórum</span> </a></li>';

				
				print'  </ul>';
				print'   </li>';
								}
?>
   <ul class="nav navbar-nav navbar-right">
      <li><a href=""id = "logoutgomb" style="right"><span class="glyphicon glyphicon-log-out"></span><span class="menuszoveg" style="color:red"><?php echo $_SESSION["login_nev"];?></span> </a></li>
       
       
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>