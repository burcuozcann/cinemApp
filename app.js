const container=document.querySelector(".container");
const selectMovie=document.querySelector("#selectMovie");
const count=document.querySelector("#count");
const amount=document.querySelector("#amount");
const seats=Array.from(document.querySelectorAll('.seat'));

runEventListener();

function runEventListener(){
    container.addEventListener("click",select);
    selectMovie.addEventListener("change",changeMovie)
    document.addEventListener("DOMContentLoaded",runPageLoad);
}
function runPageLoad(){
    const selectedSeatsIndex=Storagex.getSelectedSeatsFromStorage();
 seats.forEach((seat,index)=>{
    if(selectedSeatsIndex.includes(index)){
        seat.classList.add("selected");
    }
 })
}

function select(e){
    const selectedElement=e.target.parentElement;
    if(selectedElement.classList.contains("seat")){
        selectedElement.classList.toggle("selected");
        calculate();
        saveSelectedSeatsIndexToStorage();
        saveSelectedMovieIndexToStorage();
    }
}
function changeMovie(){
calculate();
saveSelectedMovieIndexToStorage();
}
function getSelectedSeats(){
    const selectedList= [...container.querySelectorAll(".selected")];
    return selectedList;
}
function getSelectedSeatsIndex(){
    const selectedList=getSelectedSeats();
    const selectedSeatsIndex=selectedList.map((seat)=>{
        return seats.indexOf(seat);
    })
    return selectedSeatsIndex;
}
function saveSelectedSeatsIndexToStorage(){
    const selectedSeatsIndex=getSelectedSeatsIndex();
    Storagex.addSelectedSeatToStorage(selectedSeatsIndex)

}
function saveSelectedMovieIndexToStorage(){
    const selectedMovieIndex=selectMovie.selectedIndex;
    Storagex.addSelecetedMovieToStorage(selectedMovieIndex)
}
function calculate(){
    const selectedSeatCount=getSelectedSeats().length;
    const price=selectMovie.value;
    count.textContent=selectedSeatCount;
    amount.textContent=selectedSeatCount*price;
}
