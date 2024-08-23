document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");

    // Gestionarea click-ului pe butonul de meniu (hamburger)
    hamburgerMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Evită propagarea click-ului
        this.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Închiderea meniului după selectarea unui link din meniul nav
    document.querySelectorAll(".nav-list li a").forEach(link => {
        link.addEventListener("click", function() {
            // Închide meniul hamburger după ce se face click pe un link
            hamburgerMenu.classList.remove("active");
            navList.classList.remove("active");
        });
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







// script pentru sections, modul in care se afisaza


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('.nav-list a');
    const navList = document.getElementById('nav-list');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.closest('li').id;
            const targetSection = document.getElementById(`${targetId}-section`);

            // Ascunde toate secțiunile
            sections.forEach(section => section.classList.remove('active'));

            // Afișează secțiunea vizată
            targetSection.classList.add('active');

            // Închide meniul de navigare
            navList.classList.remove('active');
        });
    });

    // Meniu hamburger
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});
