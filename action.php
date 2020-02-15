<?php
  // use when you need additional debug data in html
  $id = $_POST['id']; //Dodaje do pliku informacje z którego formularza pobieramy pliki
  $name = $_POST['name'];
  $fileCount = count($_FILES['files']['name']);
?>
<html>
  <body>
    <div>
      <p><?php echo "Name: ".$name; ?></p>
      <p><?php echo "ID: ".$id; ?></p>
      <p><?php echo "Files count: ".$fileCount; ?></p>
      <?php
        for( $i=0 ; $i<$fileCount ; $i++ ){
          $fileName = $_FILES['files']['name'][$i];
          $temp = explode(".", $_FILES['files']['name'][$i]);
          $extenstion = end($temp);
          $numberOfPhoto = $i + 1;
          $newFileName = $name."_".$id."_".$numberOfPhoto.".".$extenstion;

          echo "<p>Before: ".$fileName."</p>";
          echo "<p>Extension: ".$extenstion."</p>";
          echo "<p>After: ".$newFileName."</p>";
          echo "<hr/>";

          move_uploaded_file($_FILES['files']['tmp_name'][$i], 'uploaded/'.$newFileName);
        }
      ?>
    </div>
  </body>
</html>
