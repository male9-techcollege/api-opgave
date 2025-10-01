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
export let initialColoursByMariePierreLessard = {
    model: "default",
    input: [[redRgbParameter1ByMariePierreLessard, greenRgbParameter1ByMariePierreLessard, blueRgbParameter1ByMariePierreLessard], [redRgbParameter2ByMariePierreLessard, greenRgbParameter2ByMariePierreLessard, blueRgbParameter2ByMariePierreLessard], "N", "N", "N"]
}

/* TO DO: Q: is this the right fix?
I don't need to export that function, but I need at least one default, and it is not possible to write default before let.
It throws the error: "SyntaxError: Unexpected strict mode reserved word" */
export default function generateRandomIntegerByMariePierreLessard() {
    /* Returns a random integer from 0 to 255, inclusively
    https://www.w3schools.com/js/js_random.asp */
    let randomIntegerByMariePierreLessard = Math.floor(Math.random() * 256);
    // console.log(randomInteger); (No error returned.)
    /* If I don't explicitely state that the returned result of the function is randomInteger, I get an Undefined error. */
    return randomIntegerByMariePierreLessard;
};

