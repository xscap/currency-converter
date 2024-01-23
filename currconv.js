 //4 TASKS WE NEED TO DO IN THE JAVASCRIPT FILE

 /* 1. CONNECT JAVASCRIPT CURRENCY CONVERSION FUNCTION USED IN OTHER JS FILE
 
 2. CHANGE THGE FLAGS ACCORDING TO CURRENCY CHANGING
 
 3. THE CALCULATION IS DONE VIA API OF CURRENCY CHANGING*/

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

//Populating the options at the very begining
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const dropdown = document.querySelectorAll(".dropdown select")
const msg = document.querySelector(".msg")
let btn = document.querySelector("form button")

for(select of dropdown){
for (currCode in countryList){
   // console.log(code, countryList[code])

   let newOption = document.createElement("option")
   newOption.innerText = currCode //code inserted as innertext
   newOption.value = currCode;
   if(select.name === "from" && currCode =="USD"){
       newOption.selected = "selected"
   }
   else if
    (select.name === "to" && currCode ==="INR"){
        newOption.selected = "selected"
    }
   select.append(newOption);
}
   select.addEventListener("change",(evt) => {
    updateFlag(evt.target); //if u change something at taht part targeted the changing location
   });

  }

  const updateFlag =(element) =>{
    //console.log(element)
    let currCode = element.value
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  }


//in the above code snippet from line number 13-25 we selected the dropdown menu previously now we are currently including the code in countrylist using another javascript file we created a new html element name newoption and lateron the imside part changes according as we initialised that part with `code variable in the particular select part we included the the new options which is now a full dropdown list according to our countries.js file and we append`



btn.addEventListener("click" , async (evt) =>{
    evt.preventDefault(); //if anyone submit a form we have to prevent the automated options which previously happen on clicking the button
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval == "" || amtval < 1){
        amtval = 1
        amount.value = "1"
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

    let response = await fetch(URL);
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()]
   //console.log(rate)

   let finalAmount = amtval * rate;
   msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})