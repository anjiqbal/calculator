
const numbers = document.querySelectorAll('.number')

const operators = document.querySelectorAll('.operator')

document.querySelector('#equals').addEventListener('click', equals)

document.querySelector('#decimal').addEventListener('click', decimal)

document.querySelector('#equals').addEventListener('click', equals)

document.querySelector('.clear'). addEventListener('click', clear)

numbers.forEach(num => {
    num.addEventListener('click', display)
})

operators.forEach(operator => {
    operator.addEventListener('click', operatorDisplay)
})

function display() {
    let onScreenDisplay = document.querySelector('h2')
    let text = this.textContent
    onScreenDisplay.innerText += text
}


function operatorDisplay() {
    let onScreenDisplay = document.querySelector('h2')
    let minDisplay = document.querySelector('h3')
    if(onScreenDisplay.innerText === '') {
        alert('Please enter a number')
    } else {
        let text = this.textContent
        minDisplay.innerText = onScreenDisplay.innerText += text
        onScreenDisplay.innerText = ''
        
        operators.forEach(operator => {
        operator.removeEventListener('click', operatorDisplay)
        })
    }
}

function decimal() {
    let numbers = ['1','2','3','4','5','6','7','8','9','0']
    let operators = ['+', '-', 'x', '/']
    let onScreenDisplay = document.querySelector('h2')
    let screen = onScreenDisplay.innerText
    if(numbers.includes(screen[screen.length-1])){
        if(screen.includes('.')){
            alert('please no more decimals')
        } else {
        let text = this.textContent
        onScreenDisplay.innerText += text
        }
    } else if (operators.includes(screen[screen.length-1])) {
        let text = this.textContent
        onScreenDisplay.innerText += text
        document.querySelector('#decimal').removeEventListener('click', decimal)
    }
    
}


function equals() {
 
    let sum = document.querySelector('h3').innerText += document.querySelector('h2').innerText

if(sum.includes('x')){
   let sumArr = sum.split('x')
   document.querySelector('h2').innerText = (+sumArr[0] * +sumArr[1])
}
if(sum.includes('/')){
    let sumArr = sum.split('/')
    document.querySelector('h2').innerText = (+sumArr[0] / +sumArr[1])
 }
 if(sum.includes('+')){
    let sumArr = sum.split('+')
    document.querySelector('h2').innerText = (+sumArr[0] + +sumArr[1])
 }
 if(sum.includes('-')){
    let sumArr = sum.split('-')
    document.querySelector('h2').innerText = (+sumArr[0] - +sumArr[1])
 }

 const numbers = document.querySelectorAll('.number')

const operators = document.querySelectorAll('.operator')

document.querySelector('#equals').removeEventListener('click', equals)

document.querySelector('#decimal').removeEventListener('click', decimal)

numbers.forEach(num => {
    num.removeEventListener('click', display)
})

operators.forEach(operator => {
    operator.removeEventListener('click', operatorDisplay)
})

}


function clear() {
    document.querySelector('h2').innerText = ''
    document.querySelector('h3').innerText = ''
    document.querySelector('#equals').addEventListener('click', equals)

document.querySelector('#decimal').addEventListener('click', decimal)

numbers.forEach(num => {
    num.addEventListener('click', display)
})

operators.forEach(operator => {
    operator.addEventListener('click', operatorDisplay)
})

}