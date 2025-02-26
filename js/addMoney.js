let addButton = document.getElementById('add-money')
let balence = document.getElementById('balance')
let accNumber = document.getElementById('acc-num')
let amount = document.getElementById('amount')
let pin = document.getElementById('pin')


addButton.addEventListener('click', function(e){
    e.preventDefault()
    let convertBalance = parseInt(balence.innerText)
    let convertAmount = parseInt(amount.value)
    let sum = convertAmount + convertBalance

    // console.log(convertAmount, convertBalance)
    

    if(accNumber.value.length === 11){
        if(amount.value !== ''){
            if(parseInt(pin.value) === 1234){ 
                balence.innerText = sum
            }else{
                alert('Enter the correct PIN')
            }
        }else{
            alert('Enter the amount')
        }
    }else{
        alert('Enter the correct account number')
    }
})