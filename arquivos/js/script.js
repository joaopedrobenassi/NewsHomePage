// Iniciando a lógica de interatividade do menu interativo

function abrir_fechar(){
    let menu_desktop = document.querySelector('.menu_navegacao button')
    let menu_mobile = document.querySelector('.menu_interativo')
    if(menu_desktop.classList.contains('open')){
        menu_desktop.classList.remove('open')
        menu_mobile.style.display = 'none'
    
    }else{
        menu_desktop.classList.add('open')
        menu_mobile.style.display = 'block'
    }
}
let menu_mobile_button = document.querySelector('.menu_interativo button')
let menu_desktop = document.querySelector('.menu_navegacao button')
let menu_mobile = document.querySelector('.menu_interativo')

menu_desktop.addEventListener('click', abrir_fechar)
menu_mobile_button.addEventListener('click', abrir_fechar)
