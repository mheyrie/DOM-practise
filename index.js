const subscribeBtn = document.querySelector(".youtube-btn");

subscribeBtn.addEventListener('click', function(){
    if(subscribeBtn.innerText === "Subscribe"){
        subscribeBtn.innerHTML = "Subscribed"
        subscribeBtn.classList.add("subscribed")
    }else{
        subscribeBtn.innerHTML = "Subscribe"
        const validate = confirm("Are you sure you want to Unsubscribed?")
        if (!validate){
            subscribeBtn.innerHTML = "Subscribed"
        }else{
            subscribeBtn.classList.remove("subscribed")
        }
        /*OR
        if (validate === true){
            subscribeBtn.classList.remove("subscribed")
        }else{
            subscribeBtn.innerHTML = "Subscribed"
        }*/
    }
});


const text = document.querySelector(".input-text");
const calcBtn = document.querySelector(".calculate-btn")
const total = document.querySelector(".final-figure")

text.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        calcFunct()
    }
})

calcBtn.addEventListener("click", calcFunct)
function calcFunct(){
    //calculate the number in cents and then convert back to dollars at the end.
    const cost = Number(text.value)*100
    if(cost<=0){
        total.textContent = "Error: cost cannot be less than $0"
        total.style.color = "red";
    }else if (cost > 0 && cost < 4000){
        let cal = cost + 1000
        total.textContent = `$${cal/100}` 
    }else{
        let cal = Number(cost)
        total.textContent = `$${cal/100}`
    }
}

/* Buttons */
const toggling = document.querySelector(".btn")
toggling.addEventListener('click', function (){
    toggleFunct(".btn")
})
const toggling1 = document.querySelector(".btn1").addEventListener('click', function (){
    toggleFunct(".btn1")
})
const toggling2 = document.querySelector(".btn2").addEventListener('click', function (){
    toggleFunct(".btn2")
})
const toggling3 = document.querySelector(".btn3").addEventListener('click', function (){
    toggleFunct(".btn3")
})

function toggleFunct(selector){
    const toggling = document.querySelector(selector);
    if(!toggling.classList.contains("is-toggled")){

        turnOffToggle()
        toggling.classList.add('is-toggled')
    }else{
        toggling.classList.remove("is-toggled")
    }
}

function turnOffToggle(){
    const prevBtn = document.querySelector(".is-toggled")
    if(prevBtn){
        prevBtn.classList.remove('is-toggled')
    }
}


// .Section JS

const container = document.querySelector("#main-heading")
container.style.color="red"
console.log(container)

    //Create new list using DOM
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.append(li)
li.innerText = "Mario"

    //modify using attributes
// li.setAttribute('class', 'list-items')
    //modify using class
li.classList.add('list-items')

//remove element
// li.remove()
