
let ticket = new Ticket();

function listPrice(priceToDisplay) {
    let resultDiv = document.querySelector("div#price-result");
    resultsDiv.innerText = null;
    const p = document.createElement("p");
    const price = priceToDisplay.caclulatePrice(key);
    p.append()
    p.append(ticket.calculatePrice());
    resultDiv.append(p);
}

// Buisness Logic
function Ticket(enteredAge, enteredMovie, enteredTimeOfDay) {
    this.enteredMovie = enteredMovie;
    this.enteredAge = enteredAge;
    this.enterTimeOfDay = enteredTimeOfDay;
}

Ticket.prototype.caclulatePrice =function() {
    
    let ticketPrice = 10;
    let seniorDiscount = 2;
    if (timeOfDay === "afternoon") {
        ticketPrice = ticketPrice * 1.25;
        if (age > 61) {
            ticketPrice = ticketPrice - seniorDiscount;
        } 
    } 
    else if (timeOfDay === "evening") {
        ticketPrice = ticketPrice * 1.5;
        if (age > 61) {
            ticketPrice = ticketPrice - seniorDiscount;
        } 
    } 
    else if (timeOfDay === "morning") {
        ticketPrice = ticketPrice * 1;
        if (age > 61) {
            ticketPrice = ticketPrice - seniorDiscount;
        } 
    } 
    return ticketPrice;
}

function handleForm(event) {
    event.preventDefault ();
    const age = document.getElemenentsByName("age").value;
    const movie = document.getElementsByName("movie");
    let selectedMovie; 
    for(let i = 0; i < movie.length; i++){
        if(movie[i].checked){
            selectedMovie = movie[i].value;
            break;
        }
    }
    const time = document.getElementsByName("time");
    let selectedTime;
    for(let i = 0; i < time.length; i++){
        if(time[i].checked){ selectedTime = time[i].value;
        break;
    }

    let newTicket = new Ticket(age, movie, time);
}

window.addEventListener("load", function () {
    document.querySelector("form#movie-form").addEventListener("submit", handleForm);
});