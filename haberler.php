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
						   <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Resim</th>
      <th scope="col">Haaber Başlık</th>
      <th scope="col"></th>
    </tr>
  </thead>
          <?php
    $toplamVeri = $db->query("SELECT COUNT(*) FROM haberler")->fetchColumn();
	$goster = 15;
	$toplamSayfa = ceil($toplamVeri / $goster);
	$sayfa = $_GET["s"];
	if($sayfa < 1) $sayfa = 1; 
	if($sayfa > $toplamSayfa)
	{
		$sayfa = (int)$toplamSayfa;
	}
	$limit = ($sayfa - 1) * $goster;

	$veriler = $db->prepare("SELECT * FROM haberler ORDER BY ID DESC LIMIT :basla, :bitir");
	$veriler->bindValue(":basla",$limit,PDO::PARAM_INT);
	$veriler->bindValue(":bitir",$goster,PDO::PARAM_INT);
	$veriler->execute();
	$dizi = $veriler->fetchAll(PDO::FETCH_OBJ);
	foreach ($dizi as $item) {
		?>
	
		    <tbody>
		  <tr>
		    <th class="w-25"><img src="../haberler/<?php echo $item->resim;?>" class="img-fluid img-thumbnail"></th>
		    <td scope="row"><?php echo $item->baslik;?></td>
		    <td align="center"><a href="haber-<?php echo $item->seo; ?>-<?php echo $item->ID; ?>.html"><button type="button" class="btn btn-secondary">Detaylar</button></a></td></tr></tbody>
    
		
		<?php
	}
	?>
	</table>
	
	<nav aria-label="Page navigation example">
  <ul class="pagination">
		<?php 
		for($i = 1; $i<=$toplamSayfa;$i++)
		{
			?>
			<li class="page-item"><a class="page-link" href="haberler-<?php echo $i;?>.html"><?php echo $i;?></a></li>
			<?php
		}
		?>
  </ul>
</nav>		    
						    
						   
						 
						 
						</div><!-- post-info -->
					</div><!-- main-post -->
				</div><!-- col-lg-8 col-md-12 -->

				<?php
include ("slider.php");
?>
<?php
include ("footer.php");
?>