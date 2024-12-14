const container=document.querySelector(".container");

runEventListener();

function runEventListener(){
    container.addEventListener("click",select);
}

function select(e){
    const selectedElement=e.target.parentElement;
    if(selectedElement.classList.contains("seat")){
        selectedElement.classList.toggle("selected");
    }
}