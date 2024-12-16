const container=document.querySelector(".container");
const selectMovie=document.querySelector("#selectMovie");
const count=document.querySelector("#count");
const amount=document.querySelector("#amount");

runEventListener();

function runEventListener(){
    container.addEventListener("click",select);
    selectMovie.addEventListener("change",changeMovie)
}

function select(e){
    const selectedElement=e.target.parentElement;
    if(selectedElement.classList.contains("seat")){
        selectedElement.classList.toggle("selected");
        calculate();
    }
}
function changeMovie(){
calculate();
}
function getSelectedSeats(){
    const selectedList= [...container.querySelectorAll(".selected")];
    return selectedList;
}
function calculate(){
    const selectedSeatCount=getSelectedSeats().length;
    const price=selectMovie.value;
    count.textContent=selectedSeatCount;
    amount.textContent=selectedSeatCount*price;
}
