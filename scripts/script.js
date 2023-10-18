let quantities = []
let portions = Number(document.getElementById("portions-number").getAttribute("placeholder"))
let initQuantities = document.getElementsByClassName("quantity")
for (let i = 0; i < initQuantities.length; i++) {
    quantities.push(Number(initQuantities[i].textContent) / portions)
}

function countQuantity(){

    let newPortions = Number(document.getElementById("portions-number").value)
    if (newPortions <= 0){
        return
    }

    let newQuantities = document.getElementsByClassName("quantity")
    for (let i = 0; i < quantities.length; i++){
        newQuantities[i].textContent = Math.round(quantities[i]*newPortions*100)/100
    }

}

document.getElementById("portions-number").addEventListener("input", countQuantity)

