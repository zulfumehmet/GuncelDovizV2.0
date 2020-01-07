<?php
$gelen_seo=$_GET["seo"];
$gelen_id=$_GET["id"];
include ("header.php");

						 $query = $db->query("SELECT * FROM haberler WHERE seo = '$gelen_seo'  AND id = '$gelen_id'", PDO::FETCH_ASSOC);
if ( $query->rowCount() ){
     foreach( $query as $row ){
               }
}

?>


	<section class="post-area section">
		<div class="container">

			<div class="row">

				<div class="col-lg-8 col-md-12 no-right-padding">

					<div class="main-post">

						<div class="blog-post-inner">
						    <!-- Title -->
        <h2 class="mt-4"><?php print $row['baslik']; ?></h2>

        <!-- Author -->
        <p >
          Ekleyen
          <?php   print $row['ekleyen']; ?> 
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Ekleme Tarihi: <?php   print $row['tarih']; ?>  </p>

        <hr>

        <img class="img-fluid rounded" src="haberler/<?php print $row['resim']; ?>" alt="">

        <hr>

        <!-- Post Content -->
        <?php   print $row['icerik']; ?>  
        <hr>
        <p>Etiketlet:</p>
       <?php 
        $metin=  $row['etiket'];
            $yenimetin = explode(',',$metin);
            foreach($yenimetin as $yazdir){
            echo "<button type=\"button\" class=\"btn btn-xs btn-primary\"> $yazdir </button> ";
                    }
        
        ?> 
        
        </p>
						    
						    
						    
						   
						 
						 
						</div><!-- post-info -->


					</div><!-- main-post -->
				</div><!-- col-lg-8 col-md-12 -->

				<?php
include ("slider.php");
?>

		<section class="recomended-area section">
		<div class="container">

<div class="row">
<div class="card-deck">
    <?php
    $query = $db->query("SELECT * FROM haberler ORDER BY id DESC LIMIT 4", PDO::FETCH_ASSOC);
if ( $query->rowCount() ){
     foreach( $query as $row ){
         
             $alticerik= substr($row["baslik"], 0, 150);
         
                  print '<div class="card bg-muted"><div class="card-body text-center"><img src="haberler/'.$row["resim"].'" alt="..." class="img-thumbnail"><p class="card-text">'.$alticerik.'</p><a href="haber-'.$row["seo"].'-'.$row["ID"].'.html"><button type="button" class="btn btn-info">Devamı..</button></a></div></div>';
     }
}
    ?>

</div>

  
		  <!--haberler son-->
		 
			</div><!-- row -->

		</div><!-- container -->
		
	</section>
	
<?php
include ("footer.php");
?>