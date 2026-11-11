const inputValue = document.getElementById('display')

const displayValue = (num) => {
    inputValue.innerText += num
    console.log(num)
}
function multiply() {
    inputValue.innerText += '*'
}
function divide() {
    inputValue.innerText += '/'
}
function percentage() {
    if (inputValue.innerText) {
        inputValue.innerText = eval(inputValue.innerText.replace(/×/g, '*').replace(/÷/g, '/')) / 100
    }
}
function del() {
    inputValue.innerText = inputValue.innerText.slice(0, -1)
}
function calculate() {
    inputValue.innerText = eval(inputValue.innerText.replace(/×/g, '*').replace(/÷/g, '/'))
}
function clearAllData() {
    inputValue.innerText = ""
}
function toggleTheme() {
    document.body.classList.toggle('light-theme')
    const themeBtn = document.getElementById('theme-btn')
    themeBtn.innerText = document.body.classList.contains('light-theme') ? '🌙' : '☀️'
}

