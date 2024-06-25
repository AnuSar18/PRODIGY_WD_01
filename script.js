document.addEventListener('DOMContentLoaded', () => {
    let stars = document.querySelectorAll('.rating .fa-star');
    let navbar = document.getElementById('navbar');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });

            showThankYouMessage();
        });

        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('hovered');
                } else {
                    s.classList.remove('hovered');
                }
            });
        });

        document.getElementById('rating').addEventListener('mouseleave', () => {
            stars.forEach((s) => {
                s.classList.remove('hovered');
            });
        });
    });

    function showThankYouMessage() {
        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerText = 'Thank you for rating us!';
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    let navLinks = document.querySelectorAll('#navbar ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('hovered');
        });
    });
});