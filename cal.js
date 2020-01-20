var randomnumber = Math.floor(Math.randon()*100)+1;

var count = 0;

let previous;

document.getElementById("input").onclick = function(){
  var guess = document.getElementById("inputbutton").value;

  if (count<=10) {
    if (guess > 100 || guess < 1) {
      document.querySelector('.result').textContent = "Please Enter Number Between 0 and 100";
    } else {

      document.querySelector('.counts').textContent = 10 - guess + " left";

      if (guess == randomnumber) {
        document.querySelector('.result').textContent = " Congratulations! You got it right!";
      }else if (guess > randomnumber) {
        count++;
        document.querySelector('.result').textContent = " Your number was too high!";
      }else {
        count++;
        document.querySelector('.result').textContent = " Your number was too low!";
      }

      if (count == 1) {
        previous = guess;
      }else{
        previous += ", " + guess;
      }
      document.querySelector('.previous').textContent = previous;
    }
    }else{
    document.querySelector('.result').textContent = " Better try next time the number is" + randomnumber +".";
  }
}
