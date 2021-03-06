
const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 10)
}

const randomPick = generateRandomNumber()

const init = () => {
  // pick a random number between 1 and 10
  console.log('the current number is ', randomPick)
}

const updatePlayerName = () => {
  console.log('updating player name')
  const playerName = document.querySelector('.player-name-input').value
  document.querySelector('#playerName').textContent = playerName
}

const addMessageToList = (message) => {
  const newLi = document.createElement('li')
  newLi.textContent = message
  document.querySelector('#output').appendChild(newLi)
}

const compareGuess = () => {
  console.log('comparing guess')
  // get the playerguess
  // returing the number guess or NaN(falsy)
  const playerGuess = parseFloat(document.querySelector('.player-guess').value)
  // TODO: check if the entered a number
  // validate for:
  // if the number is whole number

  // 6 % 4 = 2 (6 /4 1reminder2)
  if (playerGuess - parseInt(playerGuess) === 0) {
    // whole number
    // make sure that the guess is a number
    if (playerGuess < 11 && playerGuess > 0) {
      if (playerGuess === randomPick) {
        // display success message
        console.log('success')
        // clear the list, then add success
        const parent = document.querySelector('#output')
        parent.textContent = ''
        addMessageToList('Success!!!')
      } else {
        // display nope message
        console.log('nope')
        // create a li, that has teh text "try again" add it to the html
        // TODO: tell the user if their guess is too high or tooooo low
        let errorMessage = ""
        if (playerGuess > randomPick) {
          // too high
          errorMessage = playerGuess + ' is too high'
        } else {
          // by default, its too low
          errorMessage = playerGuess + ' is too low'
        }
        addMessageToList(errorMessage)
      }
    } else {
      addMessageToList('Try again, with a number in the range 1 to 10')
    }
  } else {
    // decima
    addMessageToList('Try again, with a whole number')
  }
}

document.addEventListener('DOMContentLoaded', init)
document.querySelector('.player-name-input').onchange = updatePlayerName
document.querySelector('#guessButton').addEventListener('click', compareGuess)