let portions = 4
let newPortions = 4
function productQuantity(currentQuantity){
    let quantityPerPortion = currentQuantity/portions
    return quantityPerPortion*newPortions

}

function countQuantity(){
    debugger;
    let quantities = document.getElementsByClassName("quantity")
    newPortions = Number(document.getElementById("portions-number").value)
    if (newPortions <= 0){
        return
    }
    for (let i = 0; i < quantities.length; i++){
        quantities[i].innerHTML = productQuantity(Number(quantities[i].textContent))
    }
    portions = newPortions
}



