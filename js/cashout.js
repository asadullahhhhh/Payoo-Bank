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
                
                
                let divv = document.createElement('div')
                divv.innerHTML = `
                        <div class="flex justify-between items-center mt-5 bg-white px-4 py-3 rounded-xl">
                                        <div class="flex items-center">
                                            <div class="bg-gray-200 p-3 rounded-full mr-2">
                                                <img class="w-[30px]" src="assets/send1.png" alt="">
                                            </div>
                                            <div>
                                                <h3 class="font-bold text-lg text-gray-600">Bank Deposit</h3>
                                                <p class="text-[13px] text-gray-400">Bkash 500tk time</p>
                                            </div>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
                                        </div>
                                    </div>
                    `

                    transContainer.appendChild(divv)

                    setInputValueNun('cash-acc')
                    setInputValueNun('cash-amount')
                    setInputValueNun('cash-pin')

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