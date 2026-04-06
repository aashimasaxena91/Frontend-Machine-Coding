const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let count =0;

//update counter
function updateCounter()  {
    counter.innerText = count;
    decrementBtn.disabled = count <= 0; // Disable decrement button if count is 0 or less
    resetBtn.disabled = count <= 0; // Disable reset button if count is 0 or less
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});
resetBtn.addEventListener('click', () => {
    count=0;
    updateCounter();
});
