// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url)
{
    return fetch(API_URL).then(resp => resp.json());
}

const API = { get }

const quoteId = document.getElementById('quote');
const numberId = document.getElementById('number');
const reloadId = document.getElementById('reload');

function getQuote()
{
    API.get(API_URL).then(data => addQuote(data['slip']['advice'], data['slip']['id']));
}

function getQuoteId()
{
    API.get(API_URL).then(data => addQuote(data['slip']['id']));
}

// FUNCTIONS
function addQuote(quote, number)
{
    quoteId.innerText = quote;
    numberId.innerText = number;
}

function reload()// NOT WORKING!!!
{
    getQuote();
    alert("NOT WORKING!!!");
}

// ON PAGE START
document.body.onload = getQuote();

// RELOAD
reloadId.addEventListener("click", reload);