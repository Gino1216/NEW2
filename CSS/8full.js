
let randomNumber = Math.floor(Math.random() * 2);

while (true) {
  let userGuess = prompt("Hãy đoán một số (0 hoặc 1):");
  if (userGuess === null) {
    break;
  }
  userGuess = Number(userGuess);

  if (isNaN(userGuess)) {
    alert("Vui lòng nhập một số!");
  } else if (userGuess === randomNumber) {
    alert("Bạn đã đoán đúng!");
    break;
  } else {
    alert("Sai rồi, hãy thử lại!");
  }
}