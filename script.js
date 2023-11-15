document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_form.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Створюємо рядок з даними форми
        var formData = 'name=' + encodeURIComponent(name) +
                        '&email=' + encodeURIComponent(email) +
                        '&message=' + encodeURIComponent(message);

        // Відправляємо дані на сервер
        xhr.send(formData);

        // Додаємо обробник події для відповіді від сервера
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Успішно відправлено
                    console.log(xhr.responseText);
                } else {
                    // Помилка під час відправлення
                    console.error('Error:', xhr.status, xhr.statusText);
                }
            }
        };
    });
});