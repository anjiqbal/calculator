// selects all elements with a class of number and assigns it to a variable called numbers
const numbers = document.querySelectorAll('.number')

// selects all elements with a class of operator and assigns it to a variable called operators
const operators = document.querySelectorAll('.operator')

document.querySelector('#equals').addEventListener('click', equals)

document.querySelector('#decimal').addEventListener('click', decimal)

// selects the element with the id equals and adds an event listener 
document.querySelector('#equals').addEventListener('click', equals)

//use forEach to iterate over the node lists and add an event listener to each that activates on click and calls a function
numbers.forEach(num => {
    num.addEventListener('click', display)
})

operators.forEach(operator => {
    operator.addEventListener('click', operatorDisplay)
})

//assigns the text content of the calling button to a variable which is then added to the h2
function display() {
    let onScreenDisplay = document.querySelector('h2')
    let text = this.textContent
    onScreenDisplay.innerText += text
}


//adds the text content of the calling button to the display and then removes the event listeners from all operators so that they can only be used once
function operatorDisplay() {
    let onScreenDisplay = document.querySelector('h2')
    if(onScreenDisplay.innerText === '') {
        alert('Please enter a number')
    } else {
        let text = this.textContent
        onScreenDisplay.innerText += text
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
    let sum = document.querySelector('h2').innerText
// console.log(eval(document.querySelector('h2').innerText))
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

}


// const str = '777+455'
// console.log(str.split('+'))
