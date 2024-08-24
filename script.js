document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");
    const links = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('.content-section');

    // Funcție comună pentru gestionarea meniului
    function toggleMenu() {
        hamburgerMenu.classList.toggle("active");
        navList.classList.toggle("active");
    }

    // Gestionarea click-ului pe butonul de meniu (hamburger)
    hamburgerMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Evită propagarea click-ului
        toggleMenu();
    });

    // Delegație de evenimente pentru link-uri
    navList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.closest('li').id;
            const targetSection = document.getElementById(`${targetId}-section`);

            // Ascunde toate secțiunile
            sections.forEach(section => section.classList.remove('active'));

            // Afișează secțiunea vizată
            targetSection.classList.add('active');

            // Închide meniul de navigare
            toggleMenu();
        }
    });

    // Închiderea meniului când se face click în afara acestuia
    document.addEventListener("click", function(event) {
        const isClickInsideMenu = navList.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);

        // Dacă click-ul nu este pe meniu sau pe hamburger, închide meniul
        if (!isClickInsideMenu && !isClickOnHamburger) {
            hamburgerMenu.classList.remove("active");
            navList.classList.remove("active");
        }
    });
});
