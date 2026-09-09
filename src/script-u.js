const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    if(html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
        themeToggleBtn.innerHTML = '<span class="icon">☀️</span>';
    } else {
        html.setAttribute("data-theme", "dark");
        themeToggleBtn.innerHTML = '<span class="icon">🌙</span>';
    }
});

const rok = document.getElementById('rok');
const currentYear = new Date().getFullYear();
rok.textContent = currentYear;

// FUNKCJA GENERUJĄCA URODZINOWE KONFETTI
function launchConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        // Lewy wystrzał
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#09ff00', '#ffcc00', '#23a6d5', '#e73c7e']
        });
        // Prawy wystrzał
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#09ff00', '#ffcc00', '#23a6d5', '#e73c7e']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function hidePreloader() {
    let preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0"; // Efekt zanikania
        setTimeout(() => {
            preloader.style.display = "none";
            // ODPALENIE KONFETTI PO ZNIKNIĘCIU PRELOADERA!
            launchConfetti();
        }, 500); 
    }
}

// Ukrycie po załadowaniu strony
window.addEventListener("load", hidePreloader);

// Selektory Hamburgera-menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// kliknięcie w hamburgera
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Dodaj/usuń klasę dla menu
    hamburger.classList.toggle('active'); // Zmienia wyglądu hamburgera na X
});