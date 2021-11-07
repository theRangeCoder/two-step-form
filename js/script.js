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

function changeStep(btn) {
    let index = 0;

    // Select the element inside the form element, which has the active class in it
    const active = document.querySelector('form .step.active')

    index = steps.indexOf(active);

    // Remove the active class from the current one, and add it to the one at the index as per the button clicked
    steps[index].classList.remove('active');
    if (btn === 'next') {
        index += 1;
    } else if (btn === 'previous') {
        index -= 1;
    }
    steps[index].classList.add('active');
}
