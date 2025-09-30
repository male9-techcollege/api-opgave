/* Opgavens krav til kodning:

Brug fetch og .then til at hente data.
Skriv en view-funktion, der viser data i DOM'en.

Tips
Brug console.log(data) til at undersøge strukturen af den data, du modtager.
DONE: Opret et HTML-element med id="output" hvor du kan vise dataen.

Kilder:
http://colormind.io/api-access/
https://moodle.techcollege.dk/course/view.php?id=21591
fetch-mc (fetch master class)
*/

/* The following JS code, provided by Colormind works, but the code that TechCollege is asking us to implement is generating errors. 
WHY? 

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
    }
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
*/

/* DO NOT remove the last slash at the end of the URL. It will lead to a CORS error. */
const colormindUrl = 'http://colormind.io/api/';
var data = {
    model: "default",
    input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}


let fetchedColours = fetch(colormindUrl)
    .then((response) => {
        if (!response.ok) {
            /* In the console, if the **status** of the response is not 200 (ok), the number represents an error code (e.g. 404 = not found). */
            throw new Error('Network response was not ok: ' + response.status);
        } else {
            console.log(response);
            /* Det følgende konverterer svaret til et JavaScript-objekt. */
            /* "The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
            Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object."
            https://developer.mozilla.org/en-US/docs/Web/API/Response/json */
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
        view(data);
    })
    .catch((error) => {
        console.error('Fejl: ', error);
    });

function view(data) {
    const outputContainer = document.getElementById('output');

    //     outputContainer.innerHTML = `
    //     <div style="background-color: rgb(${fetchedColours.keyname})"></div>
    //   `;
}