const url = "https://cat-fact.herokuapp.com/facts"
const factopara = document.querySelector("#factos")
const butt = document.querySelector("#switch")
let promise = fetch(url)
console.log(promise)

const getfactos = async() =>{
    console.log("GETTING DATA.........")
    let response = await fetch(url) //THIS PART WILL GENERATE AN AMPLE AMOUNT OF DELAY DURING PROGARM EXECUTION
    console.log(response) //THIS RESPONSE WILL BE GENERATED IN JSON FORMAT

    let data = await response.json()
    console.log (data[3].text) //THERE WILL BE VARIOUS AMOUNT OF PROPERTIES WE CAN USE REGARDING THE PROPERTIES WE CAN TAKE THE REFERENCE OF JAVASCRIPT CONSOLE AFTER GETTING THE BASIC ARRAY OF OPERATIONS
    factopara.innerText = data[3].text
}

butt.addEventListener("click", getfactos)