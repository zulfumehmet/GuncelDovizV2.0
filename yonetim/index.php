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
        <h1 class="mt-5">ZulfuMehmet.Com</h1>
        <p class="lead">Güncel Döviz Scripti Yönetim Paneli</p>
        <ul class="list-unstyled">
		<li>info@zulfumehmet.com</li>
        </ul>
      </div>
    </div>
  </div>
   </body>
</html>




<?php
}
?>
