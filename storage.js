class Storagex{

    static keySelectedSeats="keySelectedSeats";
    static keyFullSeats="keyFullSeats";
    static keySelectedMovie="keySelectedMovie";

    static getSelectedSeatsFromStorage(){
    let selectedSeats;
    if(localStorage.getItem(this.keySelectedSeats)===null){
        selectedSeats=[];
    }else{
        selectedSeats=JSON.parse(localStorage.getItem(this.keySelectedSeats))
    }
    return selectedSeats;

    }
    getFullSeatsFromStorage(){
        let fullSeats;
    if(localStorage.getItem(this.keyFullSeats)===null){
        keyFullSeats=[];
    }else{
        fullSeats=JSON.parse(localStorage.getItem(this.keyFullSeats))
    }
    return fullSeats;

    }
    static addSelectedSeatToStorage(indexs){
    localStorage.setItem(this.keyselectedSeats,JSON.stringify(indexs))
}
    static addFullSeatToStorage(index){
    localStorage.setItem(this.keyFullSeats,JSON.stringify(indexs))

}
    static addSelecetedMovieToStorage(index){
    localStorage.setItem(this.keySelectedMovie,JSON.stringify(index))
}

}

