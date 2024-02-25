const subscribeBtn = document.querySelector(".youtube-btn");

subscribeBtn.addEventListener('click', function(){
    if(subscribeBtn.innerText === "Subscribe"){
        subscribeBtn.innerHTML = "Subscribed"
        subscribeBtn.classList.add("subscribed")
    }else{
        subscribeBtn.innerHTML = "Subscribe"
        subscribeBtn.classList.remove("subscribed")
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
    if (cost < 4000){
        let cal = cost + 1000
        total.textContent = `$${cal/100}` 
    }else{
        let cal = Number(cost)
        total.textContent = `$${cal/100}`
    }
}