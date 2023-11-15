<!-- submit_form.php -->
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);

    // Встановлюємо параметри для відправки листа
    $to = "tawerka345@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email\r\n" . "Reply-To: $email\r\n";

    // Формуємо тіло повідомлення
    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Відправляємо лист
    $mail_result = mail($to, $subject, $email_body, $headers);

    // Перевіряємо, чи лист відправлено успішно
    if ($mail_result) {
        echo "Form submitted successfully. We will contact you shortly.";
    } else {
        echo "Error submitting the form. Please try again later.";
    }
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Page not found";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
