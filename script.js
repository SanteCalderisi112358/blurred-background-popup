const containerEl = document.querySelector('.container')
const containerPopupEl = document.querySelector('.popup-container')
const btnEl = document.querySelector('.btn')
const cloeIconEl = document.querySelector('.close-icon')

btnEl.addEventListener('click', ()=>{
    containerEl.classList.add('active')
    containerPopupEl.classList.remove('active')
})

cloeIconEl.addEventListener('click', ()=>{
    containerEl.classList.remove('active')
    containerPopupEl.classList.add('active')
})