// Page Functionality


const swapPage = newPage => {

    // Remove Current Active Link
    let activeLink = document.querySelector('.nav-item.active');
    activeLink.classList.remove('active');

    // Make New Link Active
    let newActiveLink = document.querySelector(`#${newPage}-link`);
    newActiveLink.classList.add('active');

    // Remove Current Active Page
    let activePage = document.querySelector('.page.active');
    activePage.classList.remove('active');

    // Make New Page Active
    let newActivePage = document.querySelector(`#${newPage}`);
    newActivePage.classList.add('active');

}

const navItems = Array.from(document.querySelectorAll('.nav-item'));

navItems.forEach(item => {
    let page = item.getAttribute('data-page');

    item.addEventListener('click', swapPage.bind(this, page));
});


// Form Validation 

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    // Define Inputs
    let firstName = document.querySelector('#fName').value,
        lastName = document.querySelector('#lName').value,
        email = document.querySelector('#email').value,
        message = document.querySelector('#message').value;

    // Validation
    if (firstName == '' || lastName == '' || email == '' || message == '') {
        e.preventDefault();

        let alert = document.querySelector('#contact-alert');
        alert.style.display = 'block';

        setTimeout(() => {
            alert.style.display = 'none'
        }, 3500);
    }
})



// Mobile Navbar functionality

let navIcon = document.querySelector('#nav-icon'),
    sidebar = document.querySelector('#side-nav'),
    brand = document.querySelector('#brand'),
    list = document.querySelector('#nav-list'),
    pages = document.querySelectorAll('.page'),
    closeIcon = document.querySelector('#close-icon'),
    footer = document.querySelector('footer');

navIcon.addEventListener('click', () => {

    sidebar.classList.add('open');

    brand.classList.add('shown');

    list.classList.add('shown');

    pages.forEach(page => {
        page.classList.add('left');
    });

    closeIcon.classList.add('shown');

    navIcon.style.display = 'none';

    footer.classList.add('shown');
})

closeIcon.addEventListener('click', () => {

    sidebar.classList.remove('open');

    brand.classList.remove('shown');

    list.classList.remove('shown');

    pages.forEach(page => {
        page.classList.remove('left');
    });

    closeIcon.classList.remove('shown');

    navIcon.style.display = 'block';

    footer.classList.remove('shown');
})