<?php
include("baglanti.php");
session_start();
if(!isset($_SESSION["login"])){
	echo "Bu sayfayı görüntüleme yetkiniz yoktur.";
	header("Location:giris.php");
}
else
{
include("ust.php");
?>
	  <!-- Page Content -->
	  <style>

.table-image {
  td, th {
    vertical-align: middle;
  }
}
</style>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
          
           <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Resim</th>
      <th scope="col">Başlık</th>
      <th scope="col">İşlem</th>
    </tr>
  </thead>
          <?php
    $toplamVeri = $db->query("SELECT COUNT(*) FROM haberler")->fetchColumn();
	$goster = 10;
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
		    <td align="center"><a href="sil.php?sil=<?php echo $item->ID;?>">Sil</a> / <a href="haberduzenle.php?id=<?php echo $item->ID; ?>">Düzenle</a> </td></tr></tbody>
    
		
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
			<li class="page-item"><a class="page-link" href="haberliste.php?s=<?php echo $i;?>"><?php echo $i;?></a></li>
			<?php
		}
		?>
  </ul>
</nav>
	
  
			
        
      </div>
    </div>
  </div>
   </body>
</html>




<?php
}
?>
