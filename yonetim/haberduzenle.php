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

$id = $_GET['id']; 
$sql = $db->prepare("	SELECT * FROM haberler WHERE id=$id");
			$sql->execute(array(
				'6'
			));
			$haber=$sql->fetch(PDO::FETCH_ASSOC);
?>

	  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
          
          <form action="haberedit.php" method="POST" enctype="multipart/form-data">
  <div class="form-group">
<input type="hidden" class="form-control" name="haberid" id="exampleFormControlInput1" value = "<?php  echo $id; ?>" >
<div class="alert alert-primary" role="alert">
 Haber Başlığı
</div>
    <input type="text" class="form-control" name="baslik" id="exampleFormControlInput1" value = "<?php  echo $haber['baslik']; ?>">
  </div>
  <div class="form-group">
    <div class="alert alert-primary" role="alert">
 Haber Resmi
</div>
      <input type="file" id="myFile" name="dosya">
  </div>
  <div class="form-group">
   <div class="alert alert-primary" role="alert">
 Haber İçeriği
</div>

    <textarea name="icerik" id="editor1" rows="10" cols="80">
        <?php echo $haber['icerik']; ?>
            </textarea>
  </div>
  <div class="form-group">
<div class="alert alert-primary" role="alert">
Etiket (Etiketleri virgül ile ayırınız)</div>
    <input type="text" class="form-control" name="etiket" value=" <?php echo $haber['etiket']; ?>" id="exampleFormControlInput1" >
  </div>
  <button type="submit" name="form_submit" class="btn btn-primary">Düzenle</button>
</form>

        <script>
            // Ckeditor ü  ön tanımlı  ayarları  kullanarak <textarea id="editor1"> nesnesi üzerinde aktif  ediyoruz
            CKEDITOR.replace( 'icerik' );
        </script>
      
      </div>
    </div>
  </div>
   </body>
</html>




<?php
}
?>
