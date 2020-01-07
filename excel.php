
            <?php $id = $_GET['siparis']; 
           
		  $id = "11";
		  $adi = "Zülfü Mehmet";
		  $siparis=""
			
			
			
           	?>
           	
           	
           	<?php
    $data = array(
        array("First Name" => $id, "Last Name" => $adi, "Email" => $adi, "Message" => $adi),
        array("First Name" => $adi, "Last Name" => $adi, "Email" => $adi, "Message" => $adi),
    );
    
    function filterData(&$str)
    {
        $str = preg_replace("/\n/", "\\n", $str);
        $str = preg_replace("/\r?\t/", "\\t", $str);
        if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
    }
    
    // file name for download
    $fileName = "codexworld_export_data" . date('Ymd') . ".xls";
    
    // headers for download
    header("Content-Disposition: attachment; filename=\"$fileName\"");
    header("Content-Type: application/vnd.ms-excel");
    
    $flag = false;
    foreach($data as $row) {
        if(!$flag) {
            // display column names as first row
            echo implode("\t", array_keys($row)) . "\n";
            $flag = true;
        }
        // filter data
        array_walk($row, 'filterData');
        echo implode("\t", array_values($row)) . "\n";

    }
    
    exit;
?>
           	
           	
           	 
            