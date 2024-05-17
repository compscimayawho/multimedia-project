const navItems = document.querySelectorAll('.nav-item');

for (let navItem of navItems) {
    navItem.addEventListener('click', function () {
        let current = document.querySelector('.active');
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
    })
}


//scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
