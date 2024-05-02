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

