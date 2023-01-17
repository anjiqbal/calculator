
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', display)
})

function display() {
    let text = this.textContent
    console.log(text)
    document.querySelector('h2').innerText += text
}

// const str = '777+455'
// console.log(str.split('+'))
