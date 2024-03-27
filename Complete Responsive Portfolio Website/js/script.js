let words = document.querySelectorAll('.word');
if (words.length > 0) {
    words.forEach(word => {
        let letters = word.textContent.split('');
        word.textContent = '';
        letters.forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = 'letter';
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(()=>{
                letter.className = "letter out";
            },i*80);
        });
        nextWord.style.opacity="1";
        Array.from(nextWord.children).forEach((letter,i)=>{
            letter.className = "letter behind";
            setTimeout(()=>{
                letter.className = "letter in";
            },340 + i*80);
        });
        currentWordIndex = currentWord === maxWordIndex ? 0 : currentWordIndex + 1;
    };

changeText();
setInterval(changeText, 3000);
}
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().reveal('.projet-header', { origin: 'left' });
ScrollReveal().reveal('.projet-about', { origin: 'bottom' });
ScrollReveal().reveal('.top-img', { origin: 'bottom' });
ScrollReveal().reveal('.content h2', { origin: 'bottom' });
ScrollReveal().reveal('.content p', { origin: 'bottom' });
ScrollReveal().reveal('.content-img', { origin: 'bottom' });

