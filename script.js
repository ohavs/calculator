let buttons = document.querySelectorAll(".button")
let actions = document.querySelectorAll(".action")
let prompt = document.querySelector(".prompt")
let result = document.querySelector(".result")
let reset = 0
let switchBtn= document.querySelector(".switch-btn")
let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let percentage=document.getElementById("percentage")
let divider=document.getElementById("divider")
let multiplier=document.getElementById("multiplier")
let equal=document.getElementById("equal")
let calcTop=document.querySelector('.calculator-top')
let curBtn=document.querySelector('.get-currency')
let amount=document.querySelector('#amount')
let from=document.getElementById("from-input")
let to=document.getElementById("to-input")

let fromSelect=document.getElementById("from")
let toSelect=document.getElementById("to")

function display(value) {
    if (reset == 1) {
            prompt.innerHTML = ""
            prompt.innerHTML += value
            reset = 0
           result.classList.add("opacity")
    }
    else {
        prompt.innerHTML += value
    }

}

function getResult() {
    if(prompt.innerHTML==""){
        equal.classList.add('shake')
        setTimeout(()=>{
         equal.classList.remove('shake')
        },1000)
    }else{
        result.classList.remove("opacity")
        let resultEval = eval(prompt.innerHTML)
        result.innerHTML = resultEval
        reset = 1
    }
    prompt.innerHTML=""
}

function clearData() {
    prompt.innerHTML = ""
    result.innerHTML = ""
    reset = 0
}

function deleteNum() {
    prompt.innerHTML = prompt.innerHTML.substring(0, prompt.innerHTML.length - 1);
}


switchBtn.addEventListener("click",()=>{
            switch(switchBtn.innerHTML){
                case  "Calculator" :
                    switchBtn.innerHTML="Currency"
                    actions.forEach(action=>{
                        action.classList.remove("hide")
                    }) 
                    calcTop.classList.add("hide")
                    amount.classList.add("hide")
                    curBtn.classList.add("hide")
                    prompt.innerHTML=""
                    result.innerHTML=""
                    break;
                case  "Currency" :
                    switchBtn.innerHTML="Calculator"
                    actions.forEach(action=>{
                        action.classList.add("hide")
                    }) 
                    calcTop.classList.remove("hide")
                    amount.classList.remove("hide")
                    curBtn.classList.remove("hide")
                    prompt.innerHTML=""
                    result.innerHTML=""
                    break;
            }
})



var myHeaders = new Headers();
myHeaders.append("apikey", "U9i5sJ1k8XP8mJjObg0R11JbygIJkBxQ");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

curBtn.addEventListener("click",()=>{
    fetch(`https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions)
    .then(response => response.text())
    .then(res => console.log(res))
    .then(res=>postCurrency(res))
    .catch(error => console.log('error', error));
})


function postCurrency(res){
result.innerHTML=res.result
}





( function fetchSymbols(){
    // לשים פה תנאי אם יש אז לא להביא  עוד
     fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.text())
    .then(res=>fillSelect(res))
    .catch(error => console.log('error', error));
})()


function fillSelect(res){
    console.log(res)
    let symbols= JSON.parse(res).symbols
   symbols.forEach(symbol=>{
    let option = document.createElement("option");
    option.text = symbol;
    fromSelect.add(option)
   })
}







