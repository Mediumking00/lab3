// alert('This is signal of html');
//   let n = promtpt('Enter n for FizzBuzz Program');
//   console.log(n +' '+ typeof(n));

let nn = document.querySelector('#n').textContent = n;
let txt_output = "";

  function fizzbuzz(n) {
    let output = [];
    for (var i = 0; i < n; i++) {
      if (i%3 == 0 && i%5 == 0) {
        output.push("FizzBuzz ");
        txt_output += "FizzBuzz ";
      }else if (i%3 == 0) {
        output.push("Fizz ");
        txt_output += "Fizz ";
      }else if (i%5 == 0) {
        output.push("Buzz ");
        txt_output += "Buzz" ;
      }else {
        output.push(i);
      }
    }
  }

fizzbuzz(5);
