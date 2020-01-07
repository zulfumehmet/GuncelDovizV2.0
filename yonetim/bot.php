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
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
          <div class="alert alert-primary" role="alert">
Bot dosyasını cronjob ile otomatik olarak belirli saat aralıklarında çalıştırabilirsiniz...
</div>
 <p>Çekilen veriler:</p>
 <?php include($bootdosyaadi); ?>
      </div>
    </div>
  </div>
   </body>
</html>




<?php
}
?>
