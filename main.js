console.log('This is weight');

document.querySelector('#output').style.visibility = "hidden";

let inputweight = document.querySelector('#lbsInput');
inputweight.addEventListener('input',(event)=>{
  let lbs = event.target.value;
  console.log(lbs);
  if (lbs<0) {
    document.querySelector('#gramsOutput').textContent = (lbs/0.0022046).to
    document.querySelector('#kgOutput').textContent = (lbs/0.0022046).to
    document.querySelector('#ozOutput').textContent = (lbs/0.0022046).to
    
  }
  
})
