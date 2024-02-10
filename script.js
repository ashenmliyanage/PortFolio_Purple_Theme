const toggleBtn = document.querySelector('.toggle_btn');
const icon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.Drop_Down_Menu');

toggleBtn.onclick = function (params) {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open');

    icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered';
}
