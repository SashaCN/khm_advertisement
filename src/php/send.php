<?php 

if ($_POST){
  error_reporting(0);
  
  $agree = (!empty($_POST['agreement'])) ? 'Погоджуюсь':'Не погоджуюсь';

  // $mail = "vovk.as@ukr.net";
  $mail = "admin@hashtag.net.ua";
  $subj = "Замовлення на сайті Рекклама Поділля";
  $text = "
  <table style='text-align:left'>
  <tr>
    <th>Ім'я:</th>
    <td>".$_POST['name']."</td>
  </tr>
  <tr>
    <th>Пошта:</th>
    <td>".$_POST['email']."</td>
  </tr>
  <tr>
    <th>Телефон:</th>
    <td>".$_POST['phone']."</td>
  </tr>
  <tr>
    <th>Тема:</th>
    <td>".$_POST['topic']."</td>
  </tr>
  <tr>
    <th>Повідомлення:</th>
    <td>".$_POST['message']."</td>
  </tr>
  <tr>
    <th>Згода на обробку пересональних даних:</th>
    <td>".$agree."</td>
  </tr>
  </table>
  ";
  $headers = "from: admin; Content-type: text/html; charset=utf-8";
  
  mail ($mail, $subj, $text, $headers);

}


?>