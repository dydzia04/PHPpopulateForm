<?php
  $id = $_POST['id'];
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

          echo "<p>".$fileName."</p>";

          move_uploaded_file($_FILES['files']['tmp_name'][$i], 'uploaded/'.$fileName);
        }
      ?>
    </div>
  </body>
</html>
