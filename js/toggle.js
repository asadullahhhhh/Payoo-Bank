let addMoney = document.getElementById('aded-money')
let cashout = document.getElementById('cash-out')
let moneyAdd = document.getElementById('money-add')
let outCash = document.getElementById('out-cash')
let transection = document.getElementById('trans')
let tns = document.getElementById('tns')
// console.log(tns)


showHide('cash-out', 'none')
showHide('trans', 'none')

moneyAdd.addEventListener('click', function(){
    showHide('aded-money', 'block')
    showHide('cash-out', 'none')
    showHide('trans', 'none')
})

outCash.addEventListener('click', function(){
    showHide('aded-money', 'none')
    showHide('cash-out', 'block')
    showHide('trans', 'none')
})

tns.addEventListener('click', function(){
    
    showHide('aded-money', 'none')
    showHide('cash-out', 'none')
    showHide('trans', 'block')
})