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
 function toggleMenu() {
            var nav = document.querySelector('nav');
            var burgerMenu = document.getElementById('burger-menu');
            var closeMenu = document.getElementById('close-menu');

            if (nav.style.display === 'block') {
                nav.style.display = 'none';
                burgerMenu.style.display = 'block';
                closeMenu.style.display = 'none';
            } else {
                nav.style.display = 'block';
                burgerMenu.style.display = 'none';
                closeMenu.style.display = 'block';
            }
        }
