//Exercise 3

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = "Bob" //prompt('Please enter the name for your reservation');
let flag = 0;


//If the reservation exists and is unclaimed, welcome the user (console log or use alert)

if (reservations.hasOwnProperty(name)) {
    if (reservations.name.claimed == false) {
        console.log("Walcome, {}", name);
    }
    else {
        console.log("Hmm, someone already claimed this reservation");

    }
}

if (flag == reservations.lentgh) {
    console.log("You have no reservation");
}
