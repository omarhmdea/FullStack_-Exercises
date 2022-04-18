const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const checkReservation = function() {

  const inputText = document.getElementById('Reservation').value
  const headerMessage = document.getElementById('message')

  if (reservations[inputText] )
    if(!reservations[inputText].claimed)
      headerMessage.innerHTML = `Welcome, ${inputText}`
    else
      headerMessage.innerHTML = 'Hmm, someone already claimed this reservation'
  else
    headerMessage.innerHTML = 'You have no reservation'

}
