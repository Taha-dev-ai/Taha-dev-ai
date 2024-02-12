// let div = document.querySelector("div")
// div.innerText="hello!"


//-------------------------------Button------------------------------
// let newBtn = document.createElement("button")
// newBtn.innerText = "click me";
// console.log(newBtn);
//-----------------------------------Appen ka method------------------------------
// let div = document.querySelector("div")
// // div.append(newBtn)
// // div.prepend(newBtn)
// // div.before(newBtn)
// div.after(newBtn)

//------------------------------------CSS in javascript-----------------------------
// div.style.backgroundColor= "black"
// div.style.fontSize="20px"
// newBtn.style.borderRadius="25px"

//-------------------------------------Button on click--------------------------
// let btn1 = document.querySelector("#btn1")
// btn1.onclick = () => {
//    console.log("btn was clicked");
//    let a = 25;
//    a++;
//    console.log(a);
// }

//--------------------------------------Button--multiple function at a time--------------
// let btn1 = document.querySelector("#btn1")
// btn1.addEventListener("click",(evt)=>{
//     console.log("btn1 was clicked");
//     console.log("evt");
//     console.log(evt.type);
// })
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked,handeler 2");
// })
// let div = document.querySelector("div")

//---------------------------------Dark && Light mode--------------------------------
let modebtn = document.querySelector("#btn")
let body = document.querySelector("body")
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if (currmode === "light"){
        currmode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currmode);

})

