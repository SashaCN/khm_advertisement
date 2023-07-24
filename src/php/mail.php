<?php 

error_reporting(0);

$mail = "mymail@gmail.com";
$subj = "Перший лист";
$text = "Привіт, це перше поштове повідомлення надіслане за допомогою PHP";
$headers = "from: admin; Content-type: text/html; charset=utf-8";

mail ($mail, $subj, $text, $headers);
echo ("Done");