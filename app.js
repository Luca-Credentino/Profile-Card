const aElement = document.querySelector(".heartAnimation");
let toggleAnimation = false;

aElement.addEventListener("click", evt => {
    const icon = evt.currentTarget.querySelector("svg")
    if(!toggleAnimation){
        console.log(icon)
        icon.classList.add("red")
        toggleAnimation = true
    }else{
        icon.classList.remove("red")
        toggleAnimation = false
    }
})