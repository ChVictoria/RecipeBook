let portions = null
let quantities = null


function countQuantity(){

    let newPortions = Number(document.getElementById("portions-number").value)
    if (newPortions <= 0){
        return
    }

    if (quantities == null){
        quantities = []
        portions = Number(document.getElementById("portions-number").getAttribute("placeholder"))
        let initQuantities = document.getElementsByClassName("quantity")
        for (let i = 0; i < initQuantities.length; i++) {
            quantities.push(Number(initQuantities[i].textContent) / portions)
        }
    }

    let newQuantities = document.getElementsByClassName("quantity")
    for (let i = 0; i < quantities.length; i++){
        newQuantities[i].innerHTML = Math.round(quantities[i]*newPortions*100)/100
    }

}

