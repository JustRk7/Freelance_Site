<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримати дані з форми
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Адреса, на яку буде відправлено лист
    $to = "tawerka345@gmail.com";

    // Тема листа
    $subject = "Нове повідомлення від $name";

    // Заголовки для встановлення формату листа та відправника
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Тіло листа
    $body = "<p><strong>Ім'я:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Повідомлення:</strong><br>$message</p>";

    // Відправити лист
    if (mail($to, $subject, $body, $headers)) {
        // Якщо відправлено успішно, вивести повідомлення
        echo '<script>alert("Дякуємо! Ваше повідомлення було успішно відправлено.");</script>';
    } else {
        // Якщо сталася помилка під час відправлення
        echo '<script>alert("Вибачте, сталася помилка. Будь ласка, спробуйте ще раз.");</script>';
    }
}
?>
