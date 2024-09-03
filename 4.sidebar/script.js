const checkbox = document.querySelector('.burger-checkbox')

checkbox.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar__open')
})