let addMoney = document.getElementById('aded-money')
let cashout = document.getElementById('cash-out')
let moneyAdd = document.getElementById('money-add')
let outCash = document.getElementById('out-cash')


cashout.style.display = 'none'

moneyAdd.addEventListener('click', function(){
    addMoney.style.display = 'block'
    cashout.style.display = 'none'
})

outCash.addEventListener('click', function(){
    addMoney.style.display = 'none'
    cashout.style.display = 'block'
})
