var randomnumber = Math.floor(Math.random()*100)+1;
var count = 1;
let previous;


document.getElementById('inputbutton').onclick = function(){

  var guess = document.getElementById('input').value;

  if (count<11) {
    if (guess > 100 || guess < 1) {
      document.querySelector('result').textContent = "Please Enter Number Between 0 and 100";
    } else {
      document.querySelector('counts').textContent = 10 - count + " left";
      if (guess == randomnumber) {
        document.querySelector('result').textContent = " Congratulations! You got it right!";
        count = 12;
      }else if (guess > randomnumber) {
        document.querySelector('result').textContent = " Your number was too high!";
        count++;
      }else {
        document.querySelector('result').textContent = " Your number was too low!";
        count++;
      }

      if (count == 2) {
        previous = guess;
      }else{
        previous += ", " + guess;
      }
      document.querySelector('previous').textContent = previous;
    }
    }else{
    document.querySelector('result').textContent = " Better try next time the number is" + randomnumber +".";
  }
}
