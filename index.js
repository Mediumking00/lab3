// alert('This is signal of html');
  let n = Number(promtpt('Enter n for FizzBuzz Program'));

let nn = document.querySelector('#n').textContent = n;

  function fizzbuzz(n) {
    let output = [];
    let txt_output = "";

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
        txt_output += '$(i)'
      }
    }

    document.querySelector('#txt_output').textContent = txt_output;
    return output;
  }

document.querySelector('#nn').textContent = n;
console.log();
