/* код dropdown */

document.querySelectorAll('.dropdown').forEach(i => {
  i.addEventListener('click', (e) => {
    e.target.parentNode.querySelector('.dropdown__menu_arrow').classList.toggle('active')
    e.target.parentNode.querySelector('.dropdown__list').classList.toggle('active')
  })
})
