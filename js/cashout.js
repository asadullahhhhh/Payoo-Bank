let cashBtn = document.getElementById('cash-btn')
let cashBalence = document.getElementById('balance')
let cashAcc = document.getElementById('cash-acc')
let cashAmount = document.getElementById('cash-amount')
let cashPin = document.getElementById('cash-pin')

// console.log(cashBtn, cashAcc, cashAmount, cashPin)


cashBtn.addEventListener('click', function(e){
    e.preventDefault()
    let convertBalance = parseInt(cashBalence.innerText)
    let convertAmount = parseInt(cashAmount.value)
    let sub = convertAmount - convertBalance

    // console.log(convertAmount, convertBalance)
    if(cashAmount.value !== ''){
        if(parseInt(cashPin.value) === 1234){
            if(cashAcc.value.length === 11){
                balence.innerText = Math.abs(sub)
            }else{
                alert('Enter the correct account number')
            }
        }else{
            alert('Enter the correct PIN')
        }
    }else{
        alert('Enter the amount')
    }
})