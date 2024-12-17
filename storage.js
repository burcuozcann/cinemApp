class storagex{

    static keyselectedSeats="keySelectedSeats";
    static keyFullSeats;
    static keySelectedMovie;

    getSelectedSeatsFromStorage(){
    let selectedSeats;
    if(localStorage.getItem(this.keyselectedSeats)===null){
        selectedSeats=[];
    }else{
        selectedSeats=JSON.parse(localStorage.getItem(this.keyselectedSeats))
    }
    return selectedSeats;

    }
    getFullSeatsFromStorage(){
        let fullSeats;
    if(localStorage.getItem(this.keyFullSeats)===null){
        keyFullSeats=[];
    }else{
        fullSeats=JSON.parse(localStorage.getItem(this.keyselectedSeats))
    }
    return fullSeats;

    }
}

