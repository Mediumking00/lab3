// alert('This is signal of html');
//let n = Number(promtpt('Enter n for FizzBuzz Program'));
//let nn = document.querySelector('#n').textContent = n;

var randomnumber = Math.floor(Math.randon()*100)+1;

var count = 0;

let previous;

document.getElementById("input").onclick = function(){
  var guess = document.getElementById("inputbutton").value;

  if (count<=10) {

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

  }else{
    document.querySelector('.result').textContent = " Better try next time the number is" + randomnumber +".";
  }
}
