 // JavaScript для відкриття та закриття спливаючого вікна
        function openPopup() {
            document.getElementById('popup').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }

        function submitForm() {
            // Додайте код для обробки відправлення форми тут
            alert('Form submitted!'); // Повідомлення про те, що форма відправлена
            closePopup(); // Закрити спливаюче вікно
        }