/* Opgavens krav til kodning:

DONE: Brug fetch og .then til at hente data.
DONE: Skriv en view-funktion, der viser data i DOM'en.

Tips
DONE: Brug console.log(data) til at undersøge strukturen af den data, du modtager.
DONE: Opret et HTML-element med id="output" hvor du kan vise dataen.

Kilder:
http://colormind.io/api-access/
https://moodle.techcollege.dk/course/view.php?id=21591
fetch-mc (fetch master class)
*/

/* The following JS code, provided by Colormind works, but the code that TechCollege is asking us to implement is generating errors. 
Why? 
The API appears to be designed to complete the array provided in var data, at the key "input". 
With this API, you have to POST something before you can get anything back. Indeed, the code stops working if I remove var data... and http.send..., that is to say that I no longer get an array of colours from the server.

NOTE ABOUT FUNCTIONALITY: if I change the numbers in the data.input array, the server gives me a new selection of 5 colours that uses the new input as a basis. 

var url = "http://colormind.io/api/"; 
var data = {
    model: "default",
    input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"] 
}

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        console.log(palette);

        data = palette; (THIS IS MY ADDITION. IT GENERATES NO ERROR.)
    }
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
*/

/* On September 30, 2025, the first array that I got in the console was the following (by using the code provided by Colormind).
The code provided by Colormind is written in an old-fashioned way, but it works.
However, our assignment requires us to use fetch(). 
0: [48, 41, 49]
1: [95, 84, 86]
2: [188, 154, 173]
3: [225, 179, 173]
4: [209, 173, 107]
These appear to be RGB colours, presented in the form of an array.
The 2 first items in the list deviate slightly from the values of data.input.
*/

/* Research notes: 
"XMLHttpRequest (XHR) and fetch() API are both used for asynchronous HTTP requests in JavaScript (AJAX). fetch() offers a cleaner syntax, promise-based approach, and more modern feature set compared to XHR. However, there are some differences:

XMLHttpRequest event callbacks, while fetch() utilizes promise chaining.
fetch() provides more flexibility in headers and request bodies.
fetch() support cleaner error handling with catch().
Handling caching with XMLHttpRequest is difficult but caching is supported by fetch() by default in the options.cache object (cache value of second parameter) to fetch() or Request().
fetch() requires an AbortController for cancelation, while for XMLHttpRequest, it provides abort() property.
XMLHttpRequest has good support for progress tracking, which fetch() lacks.
XMLHttpRequest is only available in the browser and not natively supported in Node.js environments. On the other hand fetch() is part of the JavaScript language and is supported on all modern JavaScript runtimes.
These days fetch() is preferred for its cleaner syntax and modern features."
https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-xmlhttprequest-and-fetch

"readystatechange
Fired whenever the readyState property changes. Also available via the onreadystatechange event handler property. (...)
XMLHttpRequest.open()
Initializes a request. (...)
XMLHttpRequest.send()
Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent."
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
"The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in."
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
*/

/* DO NOT remove the last slash at the end of the URL. It will lead to a CORS error. */
const colormindUrlByMariePierreLessard = 'http://colormind.io/api/';

let redRgbParameter1ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The first red parameter is: ' + redRgbParameter1ByMariePierreLessard);
let greenRgbParameter1ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The first green parameter is: ' + greenRgbParameter1ByMariePierreLessard);
let blueRgbParameter1ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The first blue parameter is: ' + blueRgbParameter1ByMariePierreLessard);

let redRgbParameter2ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The second red parameter is: ' + redRgbParameter2ByMariePierreLessard);
let greenRgbParameter2ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The second green parameter is: ' + greenRgbParameter2ByMariePierreLessard);
let blueRgbParameter2ByMariePierreLessard = generateRandomIntegerByMariePierreLessard();
console.log('The second blue parameter is: ' + blueRgbParameter2ByMariePierreLessard);

/* POTENTIAL VARIANT (TO DO?): I could change the wording of the following to insert user input as the first 2 values of the input array. */
/* I considered keeping gray as a second colour in order to guide the API. Since the 3 last colours chosen are based on the 2 first colours provided, including a neutral like a dark grey gives the generated palette a serious expression.  
It's a bit restricting, and this is a school exercise, so I went for a fun colour-palette generator instead. */
let initialColoursByMariePierreLessard = {
    model: "default",
    input: [[redRgbParameter1ByMariePierreLessard, greenRgbParameter1ByMariePierreLessard, blueRgbParameter1ByMariePierreLessard], [redRgbParameter2ByMariePierreLessard, greenRgbParameter2ByMariePierreLessard, blueRgbParameter2ByMariePierreLessard], "N", "N", "N"]
}

function generateRandomIntegerByMariePierreLessard() {
    /* Returns a random integer from 0 to 255, inclusively
    https://www.w3schools.com/js/js_random.asp */
    let randomIntegerByMariePierreLessard = Math.floor(Math.random() * 256);
    // console.log(randomInteger); (No error returned.)
    /* If I don't explicitely state that the returned result of the function is randomInteger, I get an Undefined error. */
    return randomIntegerByMariePierreLessard;
};

/* Source for the POST method: Francesco Saviano, "JavaScript and JSON: How to Work with JSON Data", Sep 12, 2024, Medium.com.
https://medium.com/@francesco.saviano87/javascript-and-json-how-to-work-with-json-data-c39ebc6360f7 
The script example provided by TechCollege was very similar to the examples given in this article. As a consequence, it looks like more was taken from the article, but the rest had been taught to us in class.
*/
let fetchedColoursByMariePierreLessard = fetch(colormindUrlByMariePierreLessard, {
    method: 'POST',
    /* Francesco Saviano's article said that the following needs to be specified, but I only made my code work after hiding this part.
    headers: {
        'Content-Type': 'application/json'
    },
    */
    body: JSON.stringify(initialColoursByMariePierreLessard)
})
    .then((response) => {
        if (!response.ok) {
            /* In the console, if the **status** of the response is not 200 (ok), the number represents an error code (e.g. 404 = not found). */
            throw new Error('The network response was not ok: ' + response.status);
        } else {
            console.log(response); //This works without bugging (status: 200, etc.).
            /* Det følgende konverterer svaret til et JavaScript-objekt. */
            /* "The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
            Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object."
            https://developer.mozilla.org/en-US/docs/Web/API/Response/json */

            return response.json();
        }
    })
    .then((data) => {
        console.log('This data was returned: ', data);
        viewByMariePierreLessard(data);
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

function viewByMariePierreLessard(data) {
    /* The console.log in the second .then above (in the definition of fetchedColoursByMariePierreLessard) showed that Colormind sends a single key-value pair, where the key is called result, and the value is an array of 5 arrays, each of which represents a RGB colour.
    Purpose of the following: the variable fetchedColoursByMariePierreLessard is now a JS object containing 1 key and a value that is an array with 5 arrays in it. */
    fetchedColoursByMariePierreLessard = data;
    console.log("JS object fetchedColoursByMariePierreLessard: ", fetchedColoursByMariePierreLessard); //This console.log shows no error.
    /* If there had been more keys, it should have been possible to use only a portion of the data returned by the function fetch(colormindUrlByMariePierreLessard) by writing: data.result. 
    However, whenever I use .result, I get an error... */
    /* "The toString() method returns a string with array values separated by commas. The toString() method does not change the original array."
    https://www.w3schools.com/jsref/jsref_tostring_array.asp */
    firstRgbColourByMariePierreLessard = fetchedColoursByMariePierreLessard.result[0].toString();
    //console.log(firstRgbColourByMariePierreLessard); (This console.log shows no error.
    /* Console.log shows that the colour arrays are successfully converted to strings. */
    secondRgbColourByMariePierreLessard = fetchedColoursByMariePierreLessard.result[1].toString();
    thirdRgbColourByMariePierreLessard = fetchedColoursByMariePierreLessard.result[2].toString();
    fourthRgbColourByMariePierreLessard = fetchedColoursByMariePierreLessard.result[3].toString();
    fifthRgbColourByMariePierreLessard = fetchedColoursByMariePierreLessard.result[4].toString();

    const outputContainerByMariePierreLessard = document.getElementById('outputByMariePierreLessard');
    outputContainerByMariePierreLessard.innerHTML = `
        <div>
            <div style="background-color: rgb(${firstRgbColourByMariePierreLessard}">Colour 1: </div>
            <div style="border: 2px solid rgb(${firstRgbColourByMariePierreLessard}">rgb(${firstRgbColourByMariePierreLessard})</div>
        </div>
        <div>
            <div style="background-color: rgb(${secondRgbColourByMariePierreLessard}">Colour 2: </div>
            <div style="border: 2px solid rgb(${secondRgbColourByMariePierreLessard}">rgb(${secondRgbColourByMariePierreLessard})</div>
        </div>
        <div>
            <div style="background-color: rgb(${thirdRgbColourByMariePierreLessard}">Colour 3: </div>
            <div style="border: 2px solid rgb(${thirdRgbColourByMariePierreLessard}">rgb(${thirdRgbColourByMariePierreLessard})</div>
        </div>
        <div>
            <div style="background-color: rgb(${fourthRgbColourByMariePierreLessard}">Colour 4: </div>
            <div style="border: 2px solid rgb(${fourthRgbColourByMariePierreLessard}">rgb(${fourthRgbColourByMariePierreLessard})</div>
        </div>
        <div>
            <div style="background-color: rgb(${fifthRgbColourByMariePierreLessard}">Colour 5: </div>
            <div style="border: 2px solid rgb(${fifthRgbColourByMariePierreLessard}">rgb(${fifthRgbColourByMariePierreLessard})</div>
        </div>
    `;
}
