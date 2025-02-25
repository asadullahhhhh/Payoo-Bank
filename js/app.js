let number = document.getElementById('number')
let pin = document.getElementById('pin')
let login = document.getElementById('log-btn')

login.addEventListener('click', function(e){
    e.preventDefault()
    let validNum = number.value
    let num = parseInt(validNum)
    let validPin = pin.value
    let pan = parseInt(validPin)

    

    if(validNum.length !== 11 ){
        alert('Enter a valid phone number')
    }
    if(pan !== 1234){
        alert('Enter correct PIN')
    }
    if(validNum.length === 11 && pan === 1234){
        window.location.href = './main.html'
    }
})