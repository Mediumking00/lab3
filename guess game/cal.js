var randomnumber = Math.floor(Math.random()*100)+1;
var count = 1;
let previous;
var check = 0;


document.getElementById('inputbutton').onclick = function(){

  var guess = document.getElementById('input').value;

  if (count<11) {
    if (guess <= 100 && guess >= 1) {
      document.querySelector('.result').textContent = "";
      if (guess > randomnumber) {
        
        document.querySelector('.resultwrong').textContent = " Your number was too high!";
        count++;
        
      }else if (guess < randomnumber ) {
        
        document.querySelector('.resultwrong').textContent = " Your number was too low!";
        count++;
        
      }else {
        document.querySelector('.resultwrong').textContent = "";
        document.querySelector('.resultright').textContent = " Congratulations! You got it right!";

      }

      
     

      if (count == 2 ) {
        document.querySelector('.counts').textContent = (11 - count) + " left";
        previous = guess;
        document.querySelector('.previous').textContent = previous;

      }else if (count < 12 && count > 1) {
        
        document.querySelector('.counts').textContent = (11 - count) + " left";
        previous += ", " + guess;
        document.querySelector('.previous').textContent = previous;

      }
    } else {

      document.querySelector('.result').textContent = "Please Enter Number Between 0 and 100";

    }
    }if (count == 11) {
      document.querySelector('.resultwrong').textContent = " Better try next time the number is " + randomnumber +".";
      
    }
}
