<?php
include("baglanti.php");
session_start();
ob_start();
echo $_POST["pass"];
echo $_POST["user"];



if(($_POST["user"]==$kadmin) and ($_POST["pass"]==$padmin)){
		$_SESSION["login"] = "true";
		$_SESSION["user"] = $kadmin;
		$_SESSION["pass"] = $padmin;
header("Location:index.php");
}else{ 

echo "Kullanıcı adı veya Şifre Yanlış.";
header("Refresh: 2; url=giris.php");
}
ob_end_flush();

?>