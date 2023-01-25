// selects all elements with a class of number and assigns it to a variable called numbers
const numbers = document.querySelectorAll('.number')

// selects all elements with a class of operator and assigns it to a variable called operators
const operators = document.querySelectorAll('.operator')


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
        console.log(onScreenDisplay)
        alert('Please enter a number')
    } else {
        console.log(onScreenDisplay)
        let text = this.textContent
        onScreenDisplay.innerText += text
        operators.forEach(operator => {
        operator.removeEventListener('click', operatorDisplay)
        })
    }
}

function equals() {

}


// const str = '777+455'
// console.log(str.split('+'))
