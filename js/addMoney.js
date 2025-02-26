let addButton = document.getElementById('add-money')
let balence = document.getElementById('balance')
let accNumber = document.getElementById('acc-num')
let amount = document.getElementById('amount')
let pin = document.getElementById('pin')



addButton.addEventListener('click', function(e){
    e.preventDefault()
    let convertBalance = parseFloat(getInnerTextById('balance'))
    let convertAmount = parseFloat(getValueById('amount'))
    let sum = convertAmount + convertBalance
    let agent = getValueById('agent')
    let amo = getValueById('amount')
    let date = new Date()
    

    if(accNumber.value.length === 11){
        if(amount.value !== ''){
            if(parseInt(pin.value) === 1234){ 
                setValueById('balance', sum)

                let divv = document.createElement('div')

                divv.innerHTML = `
                    <div class="flex justify-between items-center mt-5 bg-white px-4 py-3 rounded-xl">
                                    <div class="flex items-center">
                                        <div class="bg-gray-200 p-3 rounded-full mr-2">
                                            <img class="w-[30px]" src="assets/wallet1.png" alt="">
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-gray-600">Bank Deposit</h3>
                                            <p class="text-[13px] text-gray-400">${agent} ${amo}tk time : ${date.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
                                    </div>
                                </div>
                `

                transContainer.appendChild(divv)

                setInputValueNun('acc-num')
                setInputValueNun('amount')
                setInputValueNun('pin')

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