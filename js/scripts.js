const myObsever = new IntersectionObserver((entries) => { 
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObsever.observe(element))


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none"; 
    }
};

document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

