// ------ working with the UL in comment -------
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello World';
// ul.children[1].innerText = 'Dome Potikanond';
// ul.lastElementChild.innerHTML = '<h1>The Last Item</h1>';

// --- What to do when clicking the button? ---
// btn.addEventListener('click', (e) => {
//   e.preventDefault();       // prevent the default submit input behavior (no refresh)
//   // ---- playing ----
//   // console.log('click');
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.value);
//   // document.querySelector('#my-form').style.background = '#ccc';
//   // document.querySelector('body').classList.add('bg-dark');
//   // document.querySelector('.items').lastElementChild.innerHTML = '<h2> Submit button is clicked! </h2>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);

  if (nameInput.value === '' || emailInput === '') {
    // alert('Please enter all fields.');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout( () => msg.remove(), 3000);    // remove msg in 3 seconds

//     setTimeout( () => {
//       msg.classList.toggle('error');
//       msg.innerHTML = ''
//     }, 3000);    // remove msg in 3 seconds

//     nameInput.focus();

  } else {
    // console.log('success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    // clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
