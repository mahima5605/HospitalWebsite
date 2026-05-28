document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add('animate-fade-in-up');
            }

        });

    }, {
        threshold:0.2
    });

    sections.forEach(section => {

        if(section.id !== 'home'){
            observer.observe(section);
        }

    });

    let currentSlide = 0;

    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');

    function showSlide(index){

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        if(index >= slides.length){
            currentSlide = 0;
        }
        else if(index < 0){
            currentSlide = slides.length - 1;
        }
        else{
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide(){
        showSlide(currentSlide + 1);
    }

    function prevSlide(){
        showSlide(currentSlide - 1);
    }

    function goToSlide(index){
        showSlide(index);
    }

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.goToSlide = goToSlide;


    showSlide(currentSlide);

    setInterval(() => {
        nextSlide();
    }, 5000);

});
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navbarCollapse.classList.contains('show')){
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle:false
            });
            bsCollapse.hide();
        }
    });
});
const navLinksActive = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            currentSection = section.getAttribute('id');
        }
    });
    navLinksActive.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if(href === `#${currentSection}`){
            link.classList.add('active');
        }
    });
});