
let diceMsg = document.getElementById('msg');
let theDice = document.getElementById('dice');
// Step 2: Randomize a dice roll (make sure it's an integer number)
    // start by creating a variable that holds a dice number (1,2,3,...6)
    let roll = Math.ceil;(Math.random()* 6);


    // Step 3: Update the user interface (document) to show the diceface (svg image)
        //ste 3 is the output
        //step 3b is creating an image element
    function rollTheDice () {
        let roll = Math.ceil;(Math.random()* 6)+1;


    diceMsg.innerHTML = `You rolled: ${roll}`;
    theDice.innerHTML = `<img src="img/dice${roll}.svg" alt="dice3" class="diceface">`

}
// Step 4: Convert the roll number (for example: 3) to a word ("three")
document.getElementById(`btn`).addEventListener ('click', rollTheDice);

// `click`
// rollTheDice
