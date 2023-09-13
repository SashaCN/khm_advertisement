<?php

$directory = 'img/pages'; // Direction of images

// Get all images
$files = scandir($directory);
// $images = [];

foreach ($files as $file) {
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif');
    
    if (in_array(strtolower($extension), $allowed_extensions)) {

        // Show image
        echo '<figure><img src="' . $directory . '/' . $file . '" alt="' . $file . '" loading="lazy" /></figure>';
    }
}

?>