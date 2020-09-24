const name = () => {
  $('#app').html(`<div id="form">
                    <h1>Hangman!</h1>
                    <h3>Enter a letter below and press enter</h3>
                    <input class="form-control form-control-sm" style="width: 40px;" type="text" id="letter-input">
                  </div>`);
};

const letterValue = () => {
  const inputValue = $('#letter-input').val();
  if (inputValue.length > 1) {
    $('#incorrect').html('<h1>Only one letter, you idiot</h1>');
    $('#display').addClass('hide');
  } else {
    $('#display').removeClass('hide');
    $('#incorrect').addClass('hide');
  }
  return inputValue;
};

const addLetter = () => {
  $('#letter-input').on('keypress', (e) => {
    if (e.which === 13) {
      e.preventDefault();
      $('#display').html(`<h1>${letterValue()}</h1>`);
    }
  });
};

const words = ['javascript', 'monkey', 'amazing', 'pancake'];

// const answer = '';
// const maxWrong = 6;
// const mistakes = 0;
// const guessed = [];
// const wordstatus = null;

const randomWord = () => {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
};

// const handleGuess (letter) => {
//   guessed.indexOf(letter) === -1
// }

// const answerArray = [];
// for (let i = 0; i < word.length; i += 1) {
//     answerArray[i] = '';
// };

// const remainingLetters = word.length;
// while(remainingLetters > 0) {
//     $('#display').html(`<h1>${answerArray.join('')}</h1`);
// };

// const guess = () => {
//     if(letterValue === null){
//         break
//     } else if (letterValue.length !== 1) {
//         $('#display').html('<h2>Please enter a single letter</h2>')
//     } else {
//         for (let j = 0; j < word.length; j += 1) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters -= 1;
//             }
//         }
//     }
// };

export default { name, addLetter, randomWord };
