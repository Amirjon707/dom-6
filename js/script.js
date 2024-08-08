const Bars = document.querySelector('.fa-bars')
const burgerMenu = document.querySelector('.burgerMenu')
const burgerX = document.querySelector('.burgerX')
const modalBtn = document.querySelector('.modalBtn')
const modal = document.querySelector('.blur')
const modalX = document.querySelector('.modalX')
const send = document.querySelector('.send')
const inp = document.querySelectorAll('input')


Bars.onclick = () => {
    burgerMenu.style.right = `0`
}

burgerX.onclick = () => {
    burgerMenu.style.right = '-100%'
}

modalBtn.onclick = () => {
    modal.style.transform = `scale(1)`
}

modalX.onclick = () => {
    modal.style.transform = `scale(0)`
}
send.onclick = () => {
    if (inp[0].value == "" || inp[1].value == "") {
        alert('Please fill in all fields')
        if (inp[0].value == '') {
            inp[0].style.border = '1px solid red'
        } else {
            inp[0].style.border = '1px solid #3333334d'
        }
        if (inp[1].value == '') {
            inp[1].style.border = `1px solid #f00`
        } else {
            inp[1].style.border = '1px solid #3333334d'
        }
    } else {
        modal.style.transform = `scale(0)`
        inp[0].value = ''
        inp[1].value = ''
        inp[0].style.border = '1px solid #3333334d'
        inp[1].style.border = '1px solid #3333334d'
    }
}