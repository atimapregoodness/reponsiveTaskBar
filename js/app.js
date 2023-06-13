const menuBtn = document.querySelector('.menu')
const contents = document.querySelector('.contents')

menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      contents.classList.toggle('active')
})

document.querySelectorAll('.link').forEach (n => n.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      contents.classList.remove('active')
}));

document.querySelectorAll('.search-btn').forEach (n => n.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      contents.classList.remove('active')
}));

document.querySelectorAll('.account-btn').forEach (n => n.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      contents.classList.remove('active')
}));



 