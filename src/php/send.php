<?php 

if ($_POST){
  error_reporting(0);
  
  $agree = (!empty($_POST['agreement'])) ? 'Погоджуюсь':'Не погоджуюсь';

  $mail = "vovk.as@ukr.net";
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
  $headers = "Content-type: text/html; charset=utf-8";
  
  if (strlen($_POST['name']) < 20) {
    if (strlen($_POST['email']) < 30) {
      if (strlen($_POST['phone']) < 20) {
        if (strlen($_POST['topic']) < 50) {
          if (strlen($_POST['message']) < 1000) {
            mail ($mail, $subj, $text, $headers);

            echo('
              <div class="center">
                <p class="sec-subtitle">Повідомлення відправлено!</p>
                <a href="index.html" class="g-button button">Повернутись на головну</a>
              </div>
            ');
          } else {
            echo('
              <div class="center">
                <p class="sec-subtitle error">Тема може містити масимум 50 символів</p>
                <a href="index.html#contacts" class="g-button button">Повернутись до форми</a>
              </div>
            ');
          }
        } else {
          echo('
              <div class="center">
                <p class="sec-subtitle error">Тема може містити масимум 50 символів</p>
                <a href="index.html#contacts" class="g-button button">Повернутись до форми</a>
              </div>
            ');
        }
      } else {
        echo('
              <div class="center error">
                <p class="sec-subtitle">Телефон може містити масимум 20 символів</p>
                <a href="index.html#contacts" class="g-button button">Повернутись до форми</a>
              </div>
            ');
      }
    } else {
      echo('
        <div class="center error">
          <p class="sec-subtitle">Пошта може містити масимум 30 символів</p>
          <a href="index.html#contacts" class="g-button button">Повернутись до форми</a>
        </div>
      ');
    }
  } else {
    echo('
      <div class="center error">
        <p class="sec-subtitle">Ім\'я може містити масимум 20 символів</p>
        <a href="index.html#contacts" class="g-button button">Повернутись до форми</a>
      </div>
    ');
  }
}


?>