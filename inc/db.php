<?php
try {
     $db = new PDO("mysql:host=localhost;dbname=dbadiniz", "kullaniciadi", "sifre");
     $db->exec("SET CHARACTER SET utf8");
} catch ( PDOException $e ){
     print $e->getMessage();
}

// reklam kodlari //

$sidebaryanreklam = '<a href="#" title="Side Bar Rekalm Alani"><img src="images/reklam-300-250.png"></a>';
$anasayfareklam = '<a href="#" title="Side Bar Rekalm Alani"><img src="images/reklam-728x90.jpg"></a>';

?>