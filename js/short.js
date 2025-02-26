function getValueById(id){
    return document.getElementById(id).value
}

function getInnerTextById(id){
    return document.getElementById(id).innerText
}

function setValueById(id, value){
    document.getElementById(id).innerText = value
}

function setInputValueNun(id){
    document.getElementById(id).value = ''
}

function showHide(id, value){
    document.getElementById(id).style.display = value
}