<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $messenger = $_POST['messenger'];
    $theme = $_POST['theme'];
    $message = $_POST['message'];

    // Адрес, на который будет отправлено письмо
    $to = 'Slobozhenuk@gmail.com';

    // Тело письма
    $body = "Имя: $name\nТелефон: $telephone\nПредпочтительно связаться через: $messenger\nEmail: $email\nСообщение:\n$message";

    // Заголовки
    $headers = "From: $name <$email>";

    // Отправляем письмо
    if (mail($to, $theme, $body, $headers)) {
        echo 'Письмо успешно отправлено!';
    } else {
        echo 'Что-то пошло не так. Письмо не отправлено.';
    }
}
?>
