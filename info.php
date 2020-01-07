<?php
 $klasor ="haberler/";
 $resim = "157823544011005052_1057284090966463_1969197427_n.jpg";
 $resimyolu = $klasor | $resim;
 echo $resimyolu;
/* döküman türünü jpeg olarak ayarlayalım.
bunu resmi tarayıcıda göstermek için kullanıyoruz. */
header('Content-type: image/jpeg');
 
/* işlem yapılacak resim */
$dosya = $resimyolu;
 
/* resmi ölçeklemek istediğimiz yükseklik ve genişlik */
$yukseklik = 375;
$genislik = 750;
 
/* küçültmek istediğimiz resmin şu anki boyutları */
list($mevcutGenislik, $mevcutYukseklik) = getimagesize($dosya);
 
/* hedef ve kaynak resimlerini oluşturalım */
$hedef = imagecreatetruecolor($genislik, $yukseklik);
$kaynak = imagecreatefromjpeg($dosya);
 
// Resmi boyutlandıralım
imagecopyresampled($hedef, $kaynak, 0, 0, 0, 0, $genislik, $yukseklik, $mevcutGenislik, $mevcutYukseklik);
 
// Resmi çıktılayalım
imagejpeg($hedef, 'haberler/resim.jpg');
 
// ayrılan bellek miktarını temizleyelim
imagedestroy($hedef);


 
?>