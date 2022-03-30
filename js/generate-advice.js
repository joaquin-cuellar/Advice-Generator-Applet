// CONSTANTS
const API_URL = "https://api.adviceslip.com/advice";

const quoteId = document.getElementById('quote');
const numberId = document.getElementById('number');
const reloadId = document.getElementById('reload');

//MAIN FUNCTION

function getQuote()
{
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);//For Debugging
            quoteId.innerText = data.slip.advice;
            numberId.innerText = data.slip.id;
        });
}

// ON PAGE START
document.onload = getQuote();

// RELOAD BUTTON
reloadId.addEventListener("click", () => {
    location.reload();
});