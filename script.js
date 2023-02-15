let buttons = document.querySelectorAll(".button")
let actions = document.querySelectorAll(".action")
let prompt = document.querySelector(".prompt")
let result = document.querySelector(".result")
let select = document.querySelector(".select")
let reset = 0




function display(value) {
    if (reset == 1) {
            prompt.innerHTML = ""
            prompt.innerHTML += value
            reset = 0
           result.classList.add("opacity")
    }
    // if(value=="%"){
    //     (value*100)/value
    // }
    else {
        prompt.innerHTML += value
    }

}

function getResult() {
    result.classList.remove("opacity")
    let resultEval = eval(prompt.innerHTML)
    result.innerHTML = resultEval
    reset = 1
}

function clearData() {
    prompt.innerHTML = ""
    result.innerHTML = ""
    reset = 0
}

function deleteNum() {
    prompt.innerHTML = prompt.innerHTML.substring(0, prompt.innerHTML.length - 1);
}

select.addEventListener("click",()=>{
    if(select.value=="cur"){
        actions.forEach(action=>{
            action.classList.add("hide")
        })
    }else{
        actions.forEach(action=>{
            action.classList.remove("hide")
        })
    }
})


// // set endpoint and your API key
// endpoint = 'convert';
// access_key = 'API_KEY';
 
// // define from currency, to currency, and amount
// from = 'EUR';
// to = 'GBP';
// amount = '10';
 
// // execute the conversion using the "convert" endpoint:
// $.ajax({
//     url: 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&amp;from=' + from + '&amp;to=' + to + '&amp;amount=' + amount,
//     dataType: 'jsonp',
//     success: function(json) {
//         // access the conversion result in json.result
//         alert(json.result);
//     }
// });