 const BASE_URL =
 "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

 const dropdowns = document.querySelectorAll(".dropdown select");  //step1.............
 const btn = document.querySelector("form button");  // step 2...............
 const fromCurr = document.querySelector(".from select"); // step 4.........
 const toCurr = document.querySelector(".To select");//  step 4...........
 const msg = document.querySelector(".msg");//  step 4...........
       //   step 1.................
 for(let select of dropdowns){
     for(currCode in countryList){
         let newOption = document.createElement("option");
         newOption.innerText = currCode;
         newOption.value = currCode;

         //  step 2......................
         if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
         }
         else if(select.name === "To" && currCode === "PKR"){
            newOption.selected = "selected";
         }
         select.append(newOption);  //step1.......................
     }

     // step 3.........................
     select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
     });
 }
 const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
 }

    //  step 4.........................
    btn.addEventListener("click", async (evt) => {
        evt.preventDefault();   //pale jo koch ho raha ha ais ko roak do
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if(amtVal === "" || amtVal < 1){
            amtVal = 1;
            amount.value = "1";
        }

        // console.log(fromCurr.value,toCurr.value);
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()]; 
        // console.log(rate); 

        let finalAmount = amtVal * rate; 
        // console.log(finalAmount);  check this 
        msg.innerText= `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    });


