<?php
$id = $_POST['id']; //Dodaje do pliku informacje z którego formularza pobieramy pliki
$name = $_POST['name'];
$fileCount = count($_FILES['files']['name']);

foreach( $_FILES['files']['name'] as $index=>$val ){
  $fileName = $_FILES['files']['name'][$index];
  $temp = explode(".", $_FILES['files']['name'][$index]);
  $extenstion = end($temp);
  $numberOfPhoto = $index + 1;
  $newFileName = $name."_".$id."_".$numberOfPhoto.".".$extenstion;

  move_uploaded_file($_FILES['files']['tmp_name'][$index], 'uploaded/'.$newFileName);
}
?>
