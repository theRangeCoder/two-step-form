// Grab all the elements which have class = "step" in them, as a Nodelist
let steps = document.querySelectorAll('form .step');

// Convert the above Nodelist to an array, to get access to the array functions
steps = Array.from(steps);

const nextBtn = document.getElementById('nextBtn');

const previousBtn = document.getElementById('previousBtn');

// Grab the form element
const form = document.querySelector('form');

// Define the changeStep() function to change the step index as per the button clicked and to assign the active class to that step
function changeStep(btn) {
    let index = 0;

    // Select the element inside the form element, which has the active class in it
    const active = document.querySelector('form .step.active')

    index = steps.indexOf(active);

    // Remove the active class from the current one, and add it to the one at the index as per the button clicked
    
    // Check if any input field is unfilled
    steps[index].classList.remove('active');
    if (btn === 'next') {
        index += 1;
    } else if (btn === 'previous') {
       index -= 1;
    }
    steps[index].classList.add('active');
    }

nextBtn.addEventListener('click', () => {
    changeStep('next');
})

previousBtn.addEventListener('click', () => {
    changeStep('previous');
})



// // Client-side form input validation
// const first_name = document.getElementById('first-name');
// const last_name = document.getElementById('last-name');
// const email = document.getElementById('email');
// const number = document.getElementById('number');

// form.addEventListener('submit', (e) => {
//     // Prevent the form from submitting, so that the inputs are validated before it is submitted
//     e.preventDefault();
//     validateInputs();
// });

// // Create a function to display the message in case of an error
// const setError = (element, message) => {
//     // div with class input-control
//     const inputControl = element.parentElement;

//     // div, where the error message is displayed
//     const errorDisplay = inputControl.querySelector('.error');

//     // Set the error message and add the error class
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// // Create a function to remove the input value if it is a valid input
// const setSuccess = (element) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const validateInputs = () => {
//     const first_name_value = first_name.value.trim();
//     const last_name_value = last_name.value.trim();
//     const email_value = email.value.trim();
//     const number_value = number.value.trim();

//     if (first_name_value === '' || !first_name_value) {
//         setError(first_name, 'First Name is required');
//     } else {
//         setSuccess(first_name);
//     }

//     if (last_name_value === '') {
//         setError(last_name, 'Last Name is required');
//     } else {
//         setSuccess(last_name);
//     }

//     if (email_value === '') {
//         setError(email, 'Email is required');
//     } else {
//         setSuccess(email);
//     }

//     if (number_value === '') {
//         setError(number, 'Phone no. is required');
//     } else {
//         setSuccess(number);
//     }
// }

