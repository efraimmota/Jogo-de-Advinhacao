
//Variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btn1')
const btnReset = document.querySelector('#btn2')

let xAttempts = 1


//eventos
btnTry.addEventListener('click', tentar)
btnReset.addEventListener('click', HandleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == "Enter" && screen1.classList.contains('hide')){
        HandleResetClick()
    }
})


//function callback
function tentar(event) {
    event.preventDefault() //nao faça o padrão
    
    let randomNumber = Math.round(Math.random() * 10)
    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        screen2.querySelector("h2").innerText = `voce acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
    
}


function HandleResetClick(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1
}

