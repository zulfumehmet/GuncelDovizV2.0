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
 
<form action="haberadd.php" method="post" enctype="multipart/form-data">
  <div class="form-group">
<div class="alert alert-primary" role="alert">
 Haber Başlığı
</div>
    <input type="text" class="form-control" name="baslik" id="exampleFormControlInput1" >
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
       
            </textarea>
  </div>
  <div class="form-group">
<div class="alert alert-primary" role="alert">
Etiket (Etiketleri virgül ile ayırınız</div>
    <input type="text" class="form-control" name="etiket" id="exampleFormControlInput1" >
  </div>
  <button type="submit" name="form_submit" class="btn btn-primary">Ekle</button>
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
