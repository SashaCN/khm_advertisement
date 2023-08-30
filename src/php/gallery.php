<?php

$directory = 'img/pages'; // Direction of images

// Get all images
$files = scandir($directory);
// $images = [];

foreach ($files as $file) {
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif');
    
    if (in_array(strtolower($extension), $allowed_extensions)) {
        // $imageInfo = exif_read_data($directory . '/' . $file);
        // $creationDate = $imageInfo['FileDateTime'];
        // $images[] = [$directory . '/' . $file, $creationDate];

        // Show image
        echo '<figure><img src="' . $directory . '/' . $file . '" alt="' . $file . '" loading="lazy" /></figure>';
    }
}
// echo "<pre>";
// var_dump($images);
// echo "</pre>";

?>