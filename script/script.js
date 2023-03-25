const menumobile = document.querySelector('.menu-mobile')
const hiddenmenu = document.querySelector('.hidden')

menumobile.addEventListener('click',function (){
    this.classList.toggle('menu-mobile--open')
    hiddenmenu.classList.toggle('show-hidden')


})
// hiddenmenu.addEventListener('click',function (){
    


// })